import React from 'react';
import { H, dm, sora, Pill, useDemo } from './DemoContext';

function ActionBtn({ onClick, color, children, pulse }: { onClick: () => void; color: string; children: React.ReactNode; pulse?: boolean }) {
  const bg = color === 'green' ? '#16A34A' : color === 'blue' ? '#2563EB' : H.amber;
  const shadow = color === 'green' ? 'rgba(22,163,74,0.4)' : color === 'blue' ? 'rgba(37,99,235,0.4)' : 'rgba(243,154,15,0.5)';
  return (
    <button onClick={onClick} style={{
      width: '100%', height: 48, borderRadius: 12, border: 'none',
      background: bg, color: '#fff', fontSize: 15, fontWeight: 700,
      fontFamily: dm, cursor: 'pointer',
      boxShadow: pulse ? `0 0 0 3px ${shadow}, 0 6px 16px ${shadow}` : `0 6px 16px ${shadow}`,
      animation: pulse ? 'pulse-btn 1.5s infinite' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    }}>{children}</button>
  );
}

function DrvLock() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: 52, fontWeight: 300, color: '#fff', fontFamily: dm }}>06:02</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: dm, marginTop: 4 }}>Tuesday, 15 April</div>
    </div>
  );
}

function DrvNotification() {
  const { step, doAction } = useDemo();
  const showAccept = step?.action === 'accept';
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '60px 20px 0', textAlign: 'center' }}>
        <div style={{ fontSize: 52, fontWeight: 300, color: '#fff', fontFamily: dm }}>06:02</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: dm, marginTop: 4 }}>Tuesday, 15 April</div>
      </div>
      <div style={{ margin: '24px 14px 0', borderRadius: 18, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', overflow: 'hidden', animation: 'slideDown 0.4s ease-out' }}>
        <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'start', gap: 12, fontFamily: dm }}>
          <img src="/logo-o.png" alt="" style={{ width: 38, height: 38, borderRadius: 10 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: H.ink }}>HOSS</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: H.ink, marginTop: 2 }}>New job assigned</div>
            <div style={{ fontSize: 11, color: H.mute, marginTop: 2 }}>ORD-2041 · Acme Logistics → Reed Transport</div>
          </div>
          <span style={{ fontSize: 10, color: H.mute }}>now</span>
        </div>
      </div>
      {showAccept && (
        <div style={{ margin: '16px 14px 0' }}>
          <ActionBtn onClick={() => doAction('accept')} color="amber" pulse>Open & Accept Job</ActionBtn>
        </div>
      )}
    </div>
  );
}

function DrvAccepted() {
  const { step, doAction, job } = useDemo();
  const showStart = step?.action === 'start';
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, overflow: 'auto' }}>
      <div style={{ padding: '56px 18px 0', fontFamily: dm }}>
        <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>ORD-2041</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: H.ink, fontFamily: sora, marginTop: 2 }}>Acme → Reed Transport</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
          <Pill color="green">Accepted</Pill>
          <span style={{ fontSize: 10, color: H.mute }}>07:16</span>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14, marginTop: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#3B82F6', marginBottom: 6 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: '#3B82F6', display: 'inline-block' }} /> Collection
          </div>
          <div style={{ paddingLeft: 12, borderLeft: `2px dashed ${H.border}`, marginLeft: 2, paddingBottom: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: H.ink }}>{job.collection.name}</div>
            <div style={{ fontSize: 11, color: H.mute }}>{job.collection.city} · {job.collection.postcode}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#16A34A', marginTop: 4 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: '#16A34A', display: 'inline-block' }} /> Delivery
          </div>
          <div style={{ paddingLeft: 12, marginLeft: 2, marginTop: 6 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: H.ink }}>{job.delivery.name}</div>
            <div style={{ fontSize: 11, color: H.mute }}>{job.delivery.city} · {job.delivery.postcode}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
          <Pill color="amber">{job.weight}</Pill>
          <Pill color="blue">{job.pallets} pallets</Pill>
        </div>
        {showStart && (
          <div style={{ marginTop: 16 }}>
            <ActionBtn onClick={() => doAction('start')} color="green" pulse>Start Job</ActionBtn>
          </div>
        )}
      </div>
    </div>
  );
}

function DrvOnRouteCollection() {
  const { step, doAction } = useDemo();
  const showArrive = step?.action === 'arrive_collection';
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, overflow: 'auto' }}>
      <div style={{ padding: '56px 18px 0', fontFamily: dm }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>ORD-2041</div>
          <Pill color="blue">On Route Collection</Pill>
        </div>
        <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${H.border}`, height: 140, position: 'relative', marginBottom: 14 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #E2F0E8 0%, #D8EBF5 100%)' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 300 140">
              <path d="M30,110 C80,90 120,40 200,35 S260,25 280,20" stroke={H.amber} strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="110" r="5" fill="#3B82F6" />
              <circle cx="280" cy="20" r="5" fill="#16A34A" />
            </svg>
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, background: 'rgba(255,255,255,0.9)', borderRadius: 8, padding: '6px 10px', display: 'flex', justifyContent: 'space-between', fontFamily: dm }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: H.ink }}>1h 42m · 118 miles</span>
            <span style={{ fontSize: 10, color: H.mute }}>Via M6 → M1</span>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14, marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#3B82F6', marginBottom: 4 }}>Heading to Collection</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: H.ink }}>Unit 4 Acme Logistics</div>
          <div style={{ fontSize: 11, color: H.mute }}>Birmingham · B11 2AA · 08:00–11:00</div>
        </div>
        {showArrive && <ActionBtn onClick={() => doAction('arrive_collection')} color="blue" pulse>Arrived at Collection</ActionBtn>}
      </div>
    </div>
  );
}

function DrvAtCollection() {
  const { step, doAction } = useDemo();
  const showLoaded = step?.action === 'loaded';
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, overflow: 'auto' }}>
      <div style={{ padding: '56px 18px 0', fontFamily: dm }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', fontWeight: 600 }}>ORD-2041</div>
          <Pill color="blue">At Collection</Pill>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12l4 4L19 7" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>Arrived · 10:42</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: H.ink }}>Unit 4 Acme Logistics</div>
          <div style={{ fontSize: 11, color: H.mute }}>Birmingham · B11 2AA</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14, marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: H.mute, textTransform: 'uppercase', marginBottom: 8 }}>Confirm Load</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <div style={{ fontSize: 10, color: H.mute, marginBottom: 4 }}>Weight</div>
              <div style={{ height: 36, borderRadius: 8, border: `1px solid ${H.border}`, padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 700, color: H.ink }}>18.0t</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: H.mute, marginBottom: 4 }}>Pallets</div>
              <div style={{ height: 36, borderRadius: 8, border: `1px solid ${H.border}`, padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 700, color: H.ink }}>14</div>
            </div>
          </div>
        </div>
        {showLoaded && <ActionBtn onClick={() => doAction('loaded')} color="amber" pulse>Confirm Loaded</ActionBtn>}
      </div>
    </div>
  );
}

function DrvOnRouteDelivery() {
  const { step, doAction } = useDemo();
  const showArrive = step?.action === 'arrive_delivery';
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, overflow: 'auto' }}>
      <div style={{ padding: '56px 18px 0', fontFamily: dm }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', fontWeight: 600 }}>ORD-2041</div>
          <Pill color="green">On Route Delivery</Pill>
        </div>
        <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${H.border}`, height: 140, position: 'relative', marginBottom: 14 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #D8EBF5 0%, #E2F0E8 100%)' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 300 140">
              <path d="M30,110 C100,80 180,30 280,20" stroke={H.amber} strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="30" cy="110" r="5" fill="#3B82F6" />
              <circle cx="280" cy="20" r="5" fill="#16A34A" />
            </svg>
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, background: 'rgba(255,255,255,0.9)', borderRadius: 8, padding: '6px 10px', display: 'flex', justifyContent: 'space-between', fontFamily: dm }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: H.ink }}>1h 12m · 86 miles</span>
            <span style={{ fontSize: 10, color: H.mute }}>Via M1</span>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14, marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#16A34A', marginBottom: 4 }}>Heading to Delivery</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: H.ink }}>Reed Transport Hub</div>
          <div style={{ fontSize: 11, color: H.mute }}>Leeds · LS11 5QG · 14:00–17:00</div>
        </div>
        {showArrive && <ActionBtn onClick={() => doAction('arrive_delivery')} color="green" pulse>Arrived at Delivery</ActionBtn>}
      </div>
    </div>
  );
}

function DrvAtDelivery() {
  const { step, doAction } = useDemo();
  const showPod = step?.action === 'capture_pod';
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, overflow: 'auto' }}>
      <div style={{ padding: '56px 18px 0', fontFamily: dm }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', fontWeight: 600 }}>ORD-2041</div>
          <Pill color="green">At Delivery</Pill>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12l4 4L19 7" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>Arrived · 14:18</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: H.ink }}>Reed Transport Hub</div>
          <div style={{ fontSize: 11, color: H.mute }}>Leeds · LS11 5QG</div>
        </div>
        {showPod && (
          <ActionBtn onClick={() => doAction('capture_pod')} color="amber" pulse>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Upload POD
          </ActionBtn>
        )}
      </div>
    </div>
  );
}

function DrvPodDone() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, overflow: 'auto' }}>
      <div style={{ padding: '56px 18px 0', fontFamily: dm }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', fontWeight: 600 }}>ORD-2041</div>
          <Pill color="green">Delivered</Pill>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${H.border}`, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 44, height: 52, borderRadius: 6, background: '#F8FAFC', border: `1px solid ${H.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>POD captured</div>
              <div style={{ fontSize: 11, color: H.mute }}>Signed by S. Ahmed</div>
            </div>
            <div style={{ width: 26, height: 26, borderRadius: 999, background: H.green100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="14" height="14"><path d="M5 12l4 4L19 7" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: H.mute }}>Waiting for office to complete job...</div>
        </div>
      </div>
    </div>
  );
}

function DrvComplete() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: H.cream, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: 56, height: 56, borderRadius: 999, background: H.green100, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <svg viewBox="0 0 24 24" width="28" height="28"><path d="M5 12l4 4L19 7" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: H.ink, fontFamily: sora, textAlign: 'center' }}>Job Complete</div>
      <div style={{ fontSize: 13, color: H.mute, fontFamily: dm, textAlign: 'center', marginTop: 6 }}>ORD-2041 · POD synced · Invoice sent</div>
    </div>
  );
}

function DriverScreenRouter() {
  const { driverScreen } = useDemo();
  const map: Record<string, React.FC> = {
    lock: DrvLock, notification: DrvNotification, job_accepted: DrvAccepted,
    on_route_collection: DrvOnRouteCollection, at_collection: DrvAtCollection,
    on_route_delivery: DrvOnRouteDelivery, at_delivery: DrvAtDelivery,
    pod_done: DrvPodDone, complete: DrvComplete,
  };
  const Screen = map[driverScreen] || DrvLock;
  return <Screen />;
}

export function DriverPane() {
  return (
    <div style={{ width: 380, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F0F0F0', padding: '20px 0' }}>
      <div style={{
        width: 300, height: 620, borderRadius: 44, background: '#0B0E16', padding: 10,
        boxShadow: '0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 90, height: 24, borderRadius: 16, background: '#000', zIndex: 50 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 40, padding: '14px 24px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#fff', fontFamily: dm }}>9:41</span>
          <span style={{ fontSize: 10, color: '#fff', fontFamily: dm }}>●●● 5G</span>
        </div>
        <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', position: 'relative', background: H.cream }}>
          <DriverScreenRouter />
        </div>
        <div style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: 100, height: 4, borderRadius: 999, background: 'rgba(255,255,255,0.3)' }} />
      </div>
    </div>
  );
}
