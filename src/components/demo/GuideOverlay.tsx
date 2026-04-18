import React from 'react';
import { H, dm, sora, STEPS, useDemo } from './DemoContext';

export function GuideOverlay() {
  const { step, stepIndex, isLast, advanceStep, restart, doAction } = useDemo();
  if (!step) return null;

  const isWelcome = step.id === 'welcome';
  const isFinal = step.final;
  const isAuto = step.auto;
  const needsAction = !!step.action;
  const sideLabel = step.side === 'office' ? 'Office' : step.side === 'driver' ? 'Driver' : '';
  const sideColor = step.side === 'office' ? '#3B82F6' : step.side === 'driver' ? '#16A34A' : H.amber;
  const sideBg = step.side === 'office' ? '#DBEAFE' : step.side === 'driver' ? '#DCFCE7' : H.amberSoft;
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'rgba(0,0,0,0.06)', zIndex: 100 }}>
        <div style={{ height: '100%', background: H.amber, width: `${progress}%`, transition: 'width 0.5s ease-out' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: 'min(90%, 600px)' }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)', fontFamily: dm }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {sideLabel && (
                <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: 999, color: sideColor, background: sideBg }}>{sideLabel}</span>
              )}
              <span style={{ fontSize: 10, color: H.mute, fontWeight: 600 }}>Step {stepIndex + 1} of {STEPS.length}</span>
            </div>
            {isAuto && <span style={{ fontSize: 9, color: H.mute, fontStyle: 'italic' }}>auto-advancing...</span>}
          </div>
          <div style={{ fontSize: 16, fontWeight: 800, color: H.ink, fontFamily: sora, marginBottom: 4 }}>{step.title}</div>
          <div style={{ fontSize: 13, color: H.mute, lineHeight: 1.5 }}>{step.desc}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
            {isWelcome && (
              <button onClick={advanceStep} style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: H.amber, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: dm, cursor: 'pointer' }}>
                Start Demo
              </button>
            )}
            {isFinal && (
              <button onClick={restart} style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: H.amber, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: dm, cursor: 'pointer' }}>
                Restart Demo
              </button>
            )}
            {needsAction && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: H.amber, fontWeight: 600 }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                {step.side === 'office' ? 'Click the highlighted button on the left' : 'Tap the button on the phone'}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
