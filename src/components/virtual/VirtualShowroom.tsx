'use client';

import Image from 'next/image';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Grid, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, Minimize2, Pause, Play } from 'lucide-react';
import type { SpaceProfile } from '@/data/spaces';

const portalTransforms = [
  { position: [-6.6, 2.3, -1.2] as const, rotationY: 0.28 },
  { position: [-2.2, 2.3, -3.1] as const, rotationY: 0.08 },
  { position: [2.2, 2.3, -3.1] as const, rotationY: -0.08 },
  { position: [6.6, 2.3, -1.2] as const, rotationY: -0.28 },
];

interface VirtualShowroomProps {
  spaces: readonly SpaceProfile[];
}

interface SceneProps extends VirtualShowroomProps {
  selectedIndex: number;
  motionEnabled: boolean;
  onReady: () => void;
  onSelect: (index: number) => void;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}

function CameraRig({ selectedIndex, motionEnabled }: { selectedIndex: number; motionEnabled: boolean }) {
  const { camera, size } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(-3.4, 2.2, -1.8));
  const desiredPosition = useMemo(() => new THREE.Vector3(), []);
  const desiredLookAt = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const portal = portalTransforms[selectedIndex] ?? portalTransforms[0];
    const isMobile = size.width < 700;
    const elapsed = state.clock.getElapsedTime();
    const drift = motionEnabled ? Math.sin(elapsed * 0.42) * 0.06 : 0;
    const pointerX = motionEnabled ? state.pointer.x * 0.16 : 0;
    const pointerY = motionEnabled ? state.pointer.y * 0.08 : 0;

    desiredPosition.set(
      (isMobile ? portal.position[0] * 0.96 : portal.position[0] * 0.4) + pointerX,
      (isMobile ? 2.45 : 2.9) + drift + pointerY,
      isMobile ? 6.6 : 9.4,
    );
    desiredLookAt.set(
      isMobile ? portal.position[0] : portal.position[0] * 0.72,
      2.18,
      portal.position[2],
    );

    const easing = 1 - Math.exp(-delta * 2.4);
    camera.position.lerp(desiredPosition, easing);
    currentLookAt.current.lerp(desiredLookAt, easing);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

function StudioPortal({
  space,
  index,
  active,
  onSelect,
}: {
  space: SpaceProfile;
  index: number;
  active: boolean;
  onSelect: (index: number) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const sourceTexture = useTexture(space.image);
  const { gl } = useThree();
  const transform = portalTransforms[index] ?? portalTransforms[0];
  const imageWidth = 4.25;
  const imageHeight = imageWidth / space.imageAspect;
  const targetScale = useMemo(() => new THREE.Vector3(), []);
  const texture = useMemo(() => {
    const clonedTexture = sourceTexture.clone();
    clonedTexture.colorSpace = THREE.SRGBColorSpace;
    clonedTexture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
    clonedTexture.needsUpdate = true;
    return clonedTexture;
  }, [gl, sourceTexture]);

  useEffect(() => () => texture.dispose(), [texture]);

  useEffect(() => {
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const scale = active ? 1.045 : 1;
    targetScale.setScalar(scale);
    groupRef.current.scale.lerp(targetScale, 1 - Math.exp(-delta * 5));
  });

  return (
    <group
      ref={groupRef}
      position={transform.position}
      rotation={[0, transform.rotationY, 0]}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(index);
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = '';
      }}
    >
      <RoundedBox args={[imageWidth + 0.3, imageHeight + 0.3, 0.22]} radius={0.09} smoothness={4}>
        <meshStandardMaterial
          color={active ? space.accent : '#2a3531'}
          emissive={space.accent}
          emissiveIntensity={active ? 0.18 : 0.025}
          metalness={0.35}
          roughness={0.48}
        />
      </RoundedBox>
      <mesh position={[0, 0, 0.125]}>
        <planeGeometry args={[imageWidth, imageHeight]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <mesh position={[0, -imageHeight / 2 - 0.23, 0.08]}>
        <boxGeometry args={[active ? 2.6 : 1.6, 0.07, 0.34]} />
        <meshStandardMaterial color={space.accent} emissive={space.accent} emissiveIntensity={active ? 0.7 : 0.18} />
      </mesh>
      <mesh position={[0, -imageHeight / 2 - 0.45, -0.15]}>
        <boxGeometry args={[2.8, 0.35, 1.15]} />
        <meshStandardMaterial color="#1b2522" metalness={0.2} roughness={0.7} />
      </mesh>
    </group>
  );
}

function Architecture({ spaces }: { spaces: readonly SpaceProfile[] }) {
  const pillars = [-9, -4.5, 0, 4.5, 9];

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -1.4]}>
        <planeGeometry args={[34, 25]} />
        <meshStandardMaterial color="#111a18" metalness={0.08} roughness={0.86} />
      </mesh>
      <Grid
        position={[0, 0.012, -1.4]}
        args={[34, 25]}
        cellSize={0.6}
        cellThickness={0.45}
        cellColor="#35433f"
        sectionSize={4.8}
        sectionThickness={0.8}
        sectionColor="#55736b"
        fadeDistance={24}
        fadeStrength={1.3}
        infiniteGrid={false}
      />
      <mesh position={[0, 3.4, -6.15]}>
        <boxGeometry args={[28, 6.8, 0.35]} />
        <meshStandardMaterial color="#17211e" metalness={0.18} roughness={0.72} />
      </mesh>
      {pillars.map((x) => (
        <group key={x} position={[x, 3.4, -5.85]}>
          <mesh>
            <boxGeometry args={[0.18, 6.8, 0.2]} />
            <meshStandardMaterial color="#53645f" metalness={0.55} roughness={0.35} />
          </mesh>
          <mesh position={[0, 0, 0.13]}>
            <boxGeometry args={[0.035, 5.8, 0.035]} />
            <meshBasicMaterial color="#94b4aa" />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 6.55, -3.35]}>
        <boxGeometry args={[28, 0.18, 5.8]} />
        <meshStandardMaterial color="#26332f" metalness={0.38} roughness={0.42} />
      </mesh>
      {spaces.map((space, index) => {
        const transform = portalTransforms[index] ?? portalTransforms[0];
        return (
          <mesh key={space.id} position={[transform.position[0], 0.035, transform.position[2] + 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.2, 0.08]} />
            <meshBasicMaterial color={space.accent} />
          </mesh>
        );
      })}
    </group>
  );
}

function SceneReady({ onReady }: { onReady: () => void }) {
  useEffect(() => onReady(), [onReady]);
  return null;
}

function VirtualScene({ spaces, selectedIndex, motionEnabled, onReady, onSelect }: SceneProps) {
  return (
    <>
      <color attach="background" args={['#0d1513']} />
      <fog attach="fog" args={['#0d1513', 12, 30]} />
      <ambientLight intensity={0.72} />
      <hemisphereLight args={['#d9e8e2', '#111815', 1.2]} />
      <directionalLight position={[-6, 8, 7]} color="#e7f0ed" intensity={2.2} />
      <pointLight position={[0, 5.4, 2]} color="#7ca89d" intensity={34} distance={18} decay={2} />
      <pointLight position={[-7, 3, 2]} color="#a7c7bd" intensity={18} distance={12} decay={2} />
      <pointLight position={[7, 3, 2]} color="#829bb0" intensity={18} distance={12} decay={2} />

      <Architecture spaces={spaces} />
      {spaces.map((space, index) => (
        <StudioPortal
          key={space.id}
          space={space}
          index={index}
          active={index === selectedIndex}
          onSelect={onSelect}
        />
      ))}
      <CameraRig selectedIndex={selectedIndex} motionEnabled={motionEnabled} />
      <SceneReady onReady={onReady} />
    </>
  );
}

export function VirtualShowroom({ spaces }: VirtualShowroomProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sceneReady, setSceneReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeSpace = spaces[selectedIndex] ?? spaces[0];
  const tourIsPlaying = isPlaying && !prefersReducedMotion;

  useEffect(() => {
    if (!tourIsPlaying) return;
    const timer = window.setInterval(() => {
      setSelectedIndex((current) => (current + 1) % spaces.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [spaces.length, tourIsPlaying]);

  useEffect(() => {
    const updateFullscreen = () => setIsFullscreen(document.fullscreenElement === wrapperRef.current);
    document.addEventListener('fullscreenchange', updateFullscreen);
    return () => document.removeEventListener('fullscreenchange', updateFullscreen);
  }, []);

  const handleReady = useCallback(() => setSceneReady(true), []);
  const selectSpace = useCallback((index: number) => {
    setSelectedIndex(index);
    setIsPlaying(false);
  }, []);

  const goToPrevious = () => {
    selectSpace((selectedIndex - 1 + spaces.length) % spaces.length);
  };

  const goToNext = () => {
    selectSpace((selectedIndex + 1) % spaces.length);
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }
      await wrapperRef.current?.requestFullscreen();
    } catch {
      setIsFullscreen(false);
    }
  };

  return (
    <section
      ref={wrapperRef}
      className="virtual-showroom relative isolate h-[calc(100svh-112px)] min-h-[560px] max-h-[820px] overflow-hidden bg-[#0d1513] text-white"
      data-scene-ready={sceneReady ? 'true' : 'false'}
      data-selected-space={activeSpace.id}
      aria-label="オサラロック バーチャルショールーム"
    >
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4" aria-hidden="true">
        {spaces.map((space) => (
          <div key={space.id} className="relative opacity-35">
            <Image src={space.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" priority />
          </div>
        ))}
        <div className="absolute inset-0 bg-[#0d1513]/70" />
      </div>

      <Canvas
        aria-label="4つのレンタルスペースを巡る3Dショールーム"
        className={`absolute inset-0 transition-opacity duration-700 ${sceneReady ? 'opacity-100' : 'opacity-0'}`}
        camera={{ position: [-2.8, 2.9, 9.4], fov: 47, near: 0.1, far: 60 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.04;
        }}
      >
        <Suspense fallback={null}>
          <VirtualScene
            spaces={spaces}
            selectedIndex={selectedIndex}
            motionEnabled={!prefersReducedMotion}
            onReady={handleReady}
            onSelect={selectSpace}
          />
        </Suspense>
      </Canvas>

      <div className="site-container pointer-events-none absolute inset-x-0 top-0 z-20 pt-5 sm:pt-7 lg:pt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 sm:text-xs">
          Osara Rock / Virtual space
        </p>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-[1.18] text-white sm:text-5xl lg:text-6xl">
          空間を、
          <br />
          歩いて選ぶ。
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 border-t border-white/15 bg-[#0c1412]/95 backdrop-blur-md">
        <div className="site-container grid gap-4 py-4 sm:py-5 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
          <div aria-live="polite" className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tabular-nums" style={{ color: activeSpace.accent }}>
                {String(selectedIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/50 sm:text-xs">
                {activeSpace.category}
              </span>
            </div>
            <h2 className="mt-2 break-words text-xl font-bold text-white sm:text-2xl">{activeSpace.name}</h2>
            <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-white/60 sm:block">{activeSpace.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10"
              aria-label="前のスペース"
              title="前のスペース"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="inline-flex h-11 min-w-14 items-center justify-center text-xs font-bold tabular-nums text-white/60">
              {selectedIndex + 1} / {spaces.length}
            </span>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10"
              aria-label="次のスペース"
              title="次のスペース"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying((current) => !current)}
              disabled={prefersReducedMotion}
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:ml-0"
              aria-label={tourIsPlaying ? '自動ツアーを停止' : '自動ツアーを再生'}
              title={tourIsPlaying ? '自動ツアーを停止' : '自動ツアーを再生'}
            >
              {tourIsPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10"
              aria-label={isFullscreen ? '全画面を終了' : '全画面で表示'}
              title={isFullscreen ? '全画面を終了' : '全画面で表示'}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" aria-hidden="true" /> : <Maximize2 className="h-4 w-4" aria-hidden="true" />}
            </button>
            <a
              href="https://linktr.ee/osara_rock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-between gap-6 rounded-md bg-white px-5 text-sm font-semibold text-primary transition-colors hover:bg-neutral-100 sm:w-auto"
            >
              スペース一覧
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
