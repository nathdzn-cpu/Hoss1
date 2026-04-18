import React from 'react';
import { H, dm, sora, Pill, DRIVERS, useDemo } from './DemoContext';

function OfficeSidebar({ active }: { active: string }) {
  const { setOfficeScreen, jobStatus } = useDemo();
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: '⌂' },
    { id: 'jobs',      label: 'Jobs',      icon: '≡' },
    { id: 'invoice',   label: 'Invoices',  icon: '□' },
  ];
  return (
    <div style={{ width: 180, background: H.navy, display: 'flex', flexDirection: 'column', fontFamily: dm, flexShrink: 0 }}>
      <div style={{ padding: '16px 14px 20px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <img src="/logo-o.png" alt="" style={{ width: 26, height: 26, objectFit: 'contain', filter: 'brightness(1.3)' }} />
        <span style={{ fontSize: 16, fontWeight: 800, color: '#fff', fontFamily: sora }}>HOSS</span>
      </div>
      <div style={{ padding: '10px 6px', display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {items.map(item => {
          const isActive = active === item.id || (active === 'job_detail' && item.id === 'jobs') || (active === 'job_detail_pod' && item.id === 'jobs') || (active === 'create_job' && item.id === 'jobs');
          return (
            <div key={item.id} onClick={() => {
              if (item.id === 'jobs' && jobStatus !== 'none') setOfficeScreen('job_detail');
              else setOfficeScreen(item.id);
            }} style={{
              padding: '8px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
              background: isActive ? 'rgba(243,154,15,0.12)' : 'transparent',
              color: isActive ? H.amber : 'rgba(148,163,184,0.8)',
              fontSize: 12, fontWeight: isActive ? 600 : 500, cursor: 'pointer',
            }}>
              <span style={{ fontSize: 13, width: 16, textAlign: 'center' }}>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </div>
      <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 999, background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}>DU</div>
        <div>
          <div style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>Demo User</div>
          <div style={{ fontSize: 9, color: '#64748B' }}>Admin</div>
        </div>
      </div>
    </div>
  );
}

function OfficeDashboard() {
  const { step, doAction, jobStatus } = useDemo();
  const showCreate = step?.action === 'open_create';
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: H.cream }}>
      <div style={{ padding: '14px 20px', borderBottom: `1px solid ${H.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', fontFamily: dm }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: H.ink, fontFamily: sora }}>Dashboard</div>
          <div style={{ fontSize: 11, color: H.mute }}>Tuesday, 15 April 2026</div>
        </div>
        <button onClick={() => showCreate && doAction('open_create')} style={{
          padding: '8px 16px', borderRadius: 8, border: 'none', fontSize: 12, fontWeight: 700, fontFamily: dm, cursor: 'pointer',
          background: H.amber, color: '#fff',
          boxShadow: showCreate ? '0 0 0 3px rgba(243,154,15,0.35), 0 4px 12px rgba(243,154,15,0.3)' : 'none',
          animation: showCreate ? 'pulse-btn 1.5s infinite' : 'none',
        }}>+ New Job</button>
      </div>
      <div style={{ flex: 1, padding: 16, overflow: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
          {[
            { label: 'Revenue Today', value: '£4,280', accent: H.amber },
            { label: 'Jobs Completed', value: '7 / 12', accent: '#3B82F6' },
            { label: 'On-Time Rate', value: '94%', accent: '#16A34A' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, padding: '14px 16px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: s.accent }} />
              <div style={{ fontSize: 10, color: H.mute, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: dm }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: H.ink, fontFamily: sora, marginTop: 4 }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${H.border}`, fontSize: 13, fontWeight: 700, color: H.ink, fontFamily: sora }}>Recent Jobs</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: dm, fontSize: 12 }}>
            <thead>
              <tr style={{ background: '#FAFAFA' }}>
                {['Order', 'Customer', 'Route', 'Status'].map(h => (
                  <th key={h} style={{ padding: '8px 14px', textAlign: 'left', fontSize: 9, fontWeight: 700, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobStatus !== 'none' && (
                <tr style={{ borderTop: `1px solid ${H.border}` }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#3B82F6' }}>ORD-2041</td>
                  <td style={{ padding: '10px 14px', color: H.ink }}>Reed Transport</td>
                  <td style={{ padding: '10px 14px', color: H.mute }}>Birmingham → Leeds</td>
                  <td style={{ padding: '10px 14px' }}><Pill color="amber">Assigned</Pill></td>
                </tr>
              )}
              {[
                ['ORD-2040', 'Atlas Distribution', 'Leeds → Sheffield',    'green', 'Completed'],
                ['ORD-2039', 'Pennine Freight',    'Bristol → London',     'green', 'Completed'],
                ['ORD-2038', 'Crown Logistics',    'Glasgow → Edinburgh',  'gray',  'Invoiced'],
              ].map(([id, cust, route, col, st], i) => (
                <tr key={i} style={{ borderTop: `1px solid ${H.border}` }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#3B82F6' }}>{id}</td>
                  <td style={{ padding: '10px 14px', color: H.ink }}>{cust}</td>
                  <td style={{ padding: '10px 14px', color: H.mute }}>{route}</td>
                  <td style={{ padding: '10px 14px' }}><Pill color={col}>{st}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OfficeCreateJob() {
  const { job, updateJobForm, selectDriver, step, doAction } = useDemo();
  const showSubmit = step?.action === 'submit_job';
  const [dropOpen, setDropOpen] = React.useState(false);

  const field = (label: string, value: string, fieldKey: string, placeholder: string) => (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4, fontFamily: dm }}>{label}</div>
      <input value={value} onChange={e => updateJobForm(fieldKey, e.target.value)} placeholder={placeholder}
        style={{ width: '100%', height: 36, borderRadius: 8, border: `1px solid ${H.border}`, padding: '0 10px', fontSize: 13, color: H.ink, fontFamily: dm, outline: 'none', boxSizing: 'border-box', background: '#fff' }}
      />
    </div>
  );

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: H.cream }}>
      <div style={{ padding: '14px 20px', borderBottom: `1px solid ${H.border}`, background: '#fff', fontFamily: dm }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: H.ink, fontFamily: sora }}>Create New Job</div>
        <div style={{ fontSize: 11, color: H.mute }}>Fill in the details below</div>
      </div>
      <div style={{ flex: 1, padding: 16, overflow: 'auto' }}>
        <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, padding: 16 }}>
          {field('Customer', job.customer, 'customer', 'Customer name')}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, fontFamily: dm }}>Collection</div>
              {field('Name', job.collection.name, 'collection.name', 'Site name')}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {field('City', job.collection.city, 'collection.city', 'City')}
                {field('Postcode', job.collection.postcode, 'collection.postcode', 'Postcode')}
              </div>
              {field('Time Window', job.collection.window, 'collection.window', 'e.g. 08:00 – 11:00')}
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, fontFamily: dm }}>Delivery</div>
              {field('Name', job.delivery.name, 'delivery.name', 'Site name')}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {field('City', job.delivery.city, 'delivery.city', 'City')}
                {field('Postcode', job.delivery.postcode, 'delivery.postcode', 'Postcode')}
              </div>
              {field('Time Window', job.delivery.window, 'delivery.window', 'e.g. 14:00 – 17:00')}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 4 }}>
            {field('Weight', job.weight, 'weight', 'e.g. 18.0t')}
            {field('Pallets', job.pallets, 'pallets', 'e.g. 14')}
            {field('Price', job.price, 'price', 'e.g. £485.00')}
          </div>
          <div style={{ marginTop: 4, marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4, fontFamily: dm }}>Assign Driver</div>
            <div style={{ position: 'relative' }}>
              <div onClick={() => setDropOpen(!dropOpen)} style={{
                height: 36, borderRadius: 8, border: `1px solid ${dropOpen ? H.amber : H.border}`, padding: '0 10px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: H.ink, fontFamily: dm, cursor: 'pointer', background: '#fff',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 999, background: H.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 8, fontWeight: 700 }}>{job.driver.initials}</div>
                  {job.driver.name}
                </div>
                <svg viewBox="0 0 20 20" width="14" height="14" fill={H.mute}><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
              </div>
              {dropOpen && (
                <div style={{ position: 'absolute', top: 38, left: 0, right: 0, background: '#fff', borderRadius: 10, border: `1px solid ${H.border}`, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 10, overflow: 'hidden' }}>
                  {DRIVERS.map((d, i) => (
                    <div key={i} onClick={() => { selectDriver(i); setDropOpen(false); }} style={{
                      padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: H.ink, fontFamily: dm, cursor: 'pointer',
                      background: job.driver.name === d.name ? H.amberSoft : 'transparent',
                    }}>
                      <div style={{ width: 22, height: 22, borderRadius: 999, background: H.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 8, fontWeight: 700 }}>{d.initials}</div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{d.name}</div>
                        <div style={{ fontSize: 10, color: H.mute }}>{d.reg} · {d.vehicle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button onClick={() => showSubmit && doAction('submit_job')} style={{
            width: '100%', height: 42, borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 700, fontFamily: dm,
            cursor: showSubmit ? 'pointer' : 'default', background: H.amber, color: '#fff', marginTop: 6,
            boxShadow: showSubmit ? '0 0 0 3px rgba(243,154,15,0.35), 0 4px 12px rgba(243,154,15,0.3)' : 'none',
            animation: showSubmit ? 'pulse-btn 1.5s infinite' : 'none', opacity: showSubmit ? 1 : 0.5,
          }}>Create Job</button>
        </div>
      </div>
    </div>
  );
}

function OfficeJobDetail() {
  const { job, jobStatus, podCaptured, step, doAction } = useDemo();
  const showInvoice = step?.action === 'create_invoice';
  const statusColor = podCaptured ? 'green' : jobStatus === 'accepted' ? 'green' : jobStatus.includes('route') ? 'amber' : jobStatus.includes('at_') ? 'blue' : 'gray';
  const statusLabel = podCaptured ? 'Delivered' : jobStatus === 'accepted' ? 'Accepted' : jobStatus === 'on_route_collection' ? 'On Route Collection' : jobStatus === 'at_collection' ? 'At Collection' : jobStatus === 'on_route_delivery' ? 'On Route Delivery' : jobStatus === 'at_delivery' ? 'At Delivery' : 'Assigned';

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: H.cream }}>
      <div style={{ padding: '14px 20px', borderBottom: `1px solid ${H.border}`, background: '#fff', fontFamily: dm }}>
        <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jobs / {job.id}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: H.ink, fontFamily: sora }}>{job.id}</span>
            <Pill color={statusColor}>{statusLabel}</Pill>
            {podCaptured && <Pill color="green">✓ POD received</Pill>}
          </div>
          <span style={{ fontSize: 11, color: H.mute }}>{job.driver.name} · {job.driver.reg}</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: 16, overflow: 'auto' }}>
        <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, padding: 16, marginBottom: 12, fontFamily: dm }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3B82F6', fontWeight: 700, marginBottom: 4 }}>Collection</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>{job.collection.name}</div>
              <div style={{ fontSize: 11, color: H.mute }}>{job.collection.city} · {job.collection.postcode}</div>
              <div style={{ fontSize: 10, color: H.mute, marginTop: 2 }}>{job.collection.window}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16A34A', fontWeight: 700, marginBottom: 4 }}>Delivery</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>{job.delivery.name}</div>
              <div style={{ fontSize: 11, color: H.mute }}>{job.delivery.city} · {job.delivery.postcode}</div>
              <div style={{ fontSize: 10, color: H.mute, marginTop: 2 }}>{job.delivery.window}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <Pill color="amber">{job.weight}</Pill>
            <Pill color="blue">{job.pallets} pallets</Pill>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, padding: 14, marginBottom: 12, fontFamily: dm, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: H.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>{job.driver.initials}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>{job.driver.name}</div>
            <div style={{ fontSize: 11, color: H.mute }}>{job.driver.reg} · {job.driver.vehicle}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: H.mute }}>Price</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: H.ink, fontFamily: sora }}>{job.price}</div>
          </div>
        </div>
        {podCaptured && (
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ padding: '12px 16px', borderBottom: `1px solid ${H.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: dm }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: H.ink, fontFamily: sora }}>Proof of Delivery</span>
              <span style={{ fontSize: 10, color: H.mute }}>14:22 — auto-synced</span>
            </div>
            <div style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, fontFamily: dm }}>
              <div style={{ width: 48, height: 56, borderRadius: 6, background: '#F8FAFC', border: `1px solid ${H.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/><polyline points="14 2 14 8 20 8" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>POD — {job.id}</div>
                <div style={{ fontSize: 11, color: H.mute }}>Signed by S. Ahmed · Reed Depot</div>
              </div>
              <div style={{ width: 28, height: 28, borderRadius: 999, background: H.green100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12l4 4L19 7" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
        )}
        {showInvoice && (
          <button onClick={() => doAction('create_invoice')} style={{
            width: '100%', padding: '12px 20px', borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 700, fontFamily: dm, cursor: 'pointer',
            background: H.amber, color: '#fff',
            boxShadow: '0 0 0 3px rgba(243,154,15,0.35), 0 4px 12px rgba(243,154,15,0.3)',
            animation: 'pulse-btn 1.5s infinite',
          }}>Create Invoice</button>
        )}
      </div>
    </div>
  );
}

function OfficeInvoice() {
  const { job } = useDemo();
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: H.cream }}>
      <div style={{ padding: '14px 20px', borderBottom: `1px solid ${H.border}`, background: '#fff', fontFamily: dm }}>
        <div style={{ fontSize: 10, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Invoices / INV-0451</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: H.ink, fontFamily: sora }}>INV-0451</span>
          <button style={{ padding: '7px 14px', borderRadius: 8, border: 'none', fontSize: 11, fontWeight: 600, fontFamily: dm, background: '#1D4ED8', color: '#fff', cursor: 'pointer' }}>Send to Xero</button>
        </div>
      </div>
      <div style={{ flex: 1, padding: 16, overflow: 'auto' }}>
        <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${H.border}`, overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 20, right: 20, transform: 'rotate(12deg)', border: '3px solid #16A34A', borderRadius: 8, padding: '5px 14px', fontSize: 18, fontWeight: 900, color: '#16A34A', fontFamily: sora, textTransform: 'uppercase', opacity: 0.7 }}>SENT</div>
          <div style={{ padding: '20px', borderBottom: `1px solid ${H.border}`, display: 'flex', justifyContent: 'space-between', fontFamily: dm }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <img src="/logo-o.png" alt="" style={{ width: 22, height: 22 }} />
                <span style={{ fontSize: 14, fontWeight: 800, color: H.ink, fontFamily: sora }}>HOSS</span>
              </div>
              <div style={{ fontSize: 11, color: H.mute, lineHeight: 1.6 }}>Acme Logistics Ltd<br/>Birmingham B11 2AA</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: H.ink, fontFamily: sora }}>INV-0451</div>
              <div style={{ fontSize: 11, color: H.mute, marginTop: 4 }}>Issued: 15 April 2026</div>
            </div>
          </div>
          <div style={{ padding: '12px 20px', borderBottom: `1px solid ${H.border}`, fontFamily: dm }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: H.mute, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Bill To</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: H.ink }}>{job.customer}</div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: dm, fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${H.border}` }}>
                {['Description', 'Total'].map(h => (
                  <th key={h} style={{ padding: '8px 20px', textAlign: h === 'Total' ? 'right' : 'left', fontSize: 9, fontWeight: 700, color: H.mute, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${H.border}` }}>
                <td style={{ padding: '10px 20px', color: H.ink }}>Birmingham → Leeds, {job.weight}, {job.pallets} pallets</td>
                <td style={{ padding: '10px 20px', textAlign: 'right', fontWeight: 600, color: H.ink }}>{job.price}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'flex-end', fontFamily: dm }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 180, fontSize: 16, fontWeight: 800, color: H.ink, fontFamily: sora, borderTop: `2px solid ${H.ink}`, paddingTop: 8 }}>
              <span>Total</span><span>{job.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OfficePane() {
  const { officeScreen } = useDemo();
  const screenMap: Record<string, React.FC> = {
    dashboard:     OfficeDashboard,
    create_job:    OfficeCreateJob,
    job_detail:    OfficeJobDetail,
    job_detail_pod: OfficeJobDetail,
    invoice:       OfficeInvoice,
    jobs:          OfficeJobDetail,
  };
  const Screen = screenMap[officeScreen] || OfficeDashboard;
  return (
    <div style={{ flex: 1, display: 'flex', minWidth: 0, borderRight: `1px solid ${H.border}` }}>
      <OfficeSidebar active={officeScreen} />
      <Screen />
    </div>
  );
}
