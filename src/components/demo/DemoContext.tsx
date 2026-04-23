import React from 'react';

export const H = {
  amber: '#F39A0F', amberSoft: '#FBEAD0', amberText: '#8A5A10',
  navy: '#11172A', ink: '#171B24', mute: '#6B7280', border: '#DDE1E6',
  cream: '#FAF7F2', green100: '#DCFCE7', green800: '#166534',
  blue100: '#DBEAFE', blue800: '#1E40AF',
};

export const dm = "'DM Sans', sans-serif";
export const sora = "'Sora', sans-serif";

export interface Driver { name: string; initials: string; reg: string; vehicle: string; }
export interface Address { name: string; city: string; postcode: string; window: string; }
export interface Job {
  id: string; customer: string;
  collection: Address; delivery: Address;
  weight: string; pallets: string; driver: Driver; price: string;
}

export interface Step {
  id: string; side: 'office' | 'driver' | 'both';
  title: string; desc: string;
  action?: string; auto?: boolean; delay?: number; final?: boolean;
}

export const STEPS: Step[] = [
  { id: 'welcome',    side: 'both',   title: 'Welcome to HOSS',              desc: 'This interactive demo shows how HOSS connects your office and drivers in real time. Follow the prompts to walk through a complete job.' },
  { id: 'open_create',side: 'office', title: 'Create a new job',             desc: "Click 'New Job' to open the job creation form.", action: 'open_create' },
  { id: 'fill_form',  side: 'office', title: 'Fill in the job details',      desc: "Edit any fields you like: customer, addresses, weight, pallets, driver. Then click 'Create Job' when ready.", action: 'submit_job' },
  { id: 'notif',      side: 'driver', title: 'Driver receives notification', desc: 'The assigned driver just got a push notification with the job details you entered.', auto: true, delay: 1500 },
  { id: 'accept',     side: 'driver', title: 'Accept the job',               desc: "The driver reviews the job and taps 'Accept Job'.", action: 'accept' },
  { id: 'accepted',   side: 'office', title: 'Job accepted',                 desc: "The office sees the status update to 'Accepted' in real time.", auto: true, delay: 800 },
  { id: 'start',      side: 'driver', title: 'Start the job',                desc: 'Dave enters his odometer reading and starts driving to collection.', action: 'start' },
  { id: 'on_route_c', side: 'office', title: 'Driver en route',              desc: 'The office sees Dave is on route to collection.', auto: true, delay: 1000 },
  { id: 'arrive_c',   side: 'driver', title: 'Arrive at collection',         desc: "Dave has arrived. Tap 'Arrived at Collection'.", action: 'arrive_collection' },
  { id: 'at_coll',    side: 'office', title: 'At collection',                desc: 'Office sees Dave is at the collection site.', auto: true, delay: 800 },
  { id: 'loaded',     side: 'driver', title: 'Confirm loaded',               desc: "Goods are loaded. Tap 'Confirm Loaded' to head to delivery.", action: 'loaded' },
  { id: 'on_route_d', side: 'office', title: 'On route to delivery',         desc: 'Dave is heading to the delivery point. Status updates in real time.', auto: true, delay: 1000 },
  { id: 'arrive_d',   side: 'driver', title: 'Arrive at delivery',           desc: 'Dave has arrived at the delivery site.', action: 'arrive_delivery' },
  { id: 'at_del',     side: 'office', title: 'At delivery',                  desc: 'Office sees the driver at the delivery location.', auto: true, delay: 800 },
  { id: 'pod',        side: 'driver', title: 'Capture POD',                  desc: "Tap 'Upload POD' to capture proof of delivery with photo + signature.", action: 'capture_pod' },
  { id: 'pod_recv',   side: 'office', title: 'POD received',                 desc: 'The POD syncs instantly. No chasing, no spreadsheets.', auto: true, delay: 1000 },
  { id: 'invoice',    side: 'office', title: 'Generate invoice',             desc: 'Click Create Invoice to generate and send to Xero.', action: 'create_invoice' },
  { id: 'complete',   side: 'both',   title: 'Job complete',                 desc: 'From creation to invoice. One system, zero chasing. That\'s HOSS.', final: true },
];

export const DRIVERS: Driver[] = [
  { name: 'Dave Mitchell', initials: 'DM', reg: 'YX73 KGA', vehicle: 'Volvo FH 460' },
  { name: 'Sarah Ahmed',   initials: 'SA', reg: 'BF72 LMN', vehicle: 'DAF XF 480'   },
  { name: 'Tom Reilly',    initials: 'TR', reg: 'PO71 XYZ', vehicle: 'Scania R450'   },
];

export const DEFAULT_JOB: Job = {
  id: 'ORD-2041', customer: 'Reed Transport Leeds',
  collection: { name: 'Unit 4 Acme Logistics', city: 'Birmingham', postcode: 'B11 2AA', window: '08:00 – 11:00' },
  delivery:   { name: 'Reed Transport Hub',    city: 'Leeds',      postcode: 'LS11 5QG', window: '14:00 – 17:00' },
  weight: '18.0t', pallets: '14',
  driver: DRIVERS[0],
  price: '£485.00',
};

interface DemoCtx {
  step: Step; stepIndex: number; isLast: boolean;
  advanceStep: () => void; doAction: (a: string) => void; restart: () => void;
  jobStatus: string; officeScreen: string; driverScreen: string;
  podCaptured: boolean; invoiceCreated: boolean; animating: boolean;
  setOfficeScreen: (s: string) => void; setDriverScreen: (s: string) => void;
  job: Job; updateJobForm: (field: string, value: string) => void; selectDriver: (i: number) => void;
}

export const DemoContext = React.createContext<DemoCtx | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [stepIndex, setStepIndex]       = React.useState(0);
  const [jobStatus, setJobStatus]       = React.useState('none');
  const [officeScreen, setOfficeScreen] = React.useState('dashboard');
  const [driverScreen, setDriverScreen] = React.useState('lock');
  const [podCaptured, setPodCaptured]   = React.useState(false);
  const [invoiceCreated, setInvoiceCreated] = React.useState(false);
  const [animating, setAnimating]       = React.useState(false);
  const [jobForm, setJobForm]           = React.useState<Job>({ ...DEFAULT_JOB, collection: { ...DEFAULT_JOB.collection }, delivery: { ...DEFAULT_JOB.delivery }, driver: { ...DEFAULT_JOB.driver } });

  const updateJobForm = React.useCallback((field: string, value: string) => {
    setJobForm(prev => {
      if (field.includes('.')) {
        const [parent, child] = field.split('.') as [keyof Job, string];
        return { ...prev, [parent]: { ...(prev[parent] as object), [child]: value } };
      }
      return { ...prev, [field]: value };
    });
  }, []);

  const selectDriver = React.useCallback((i: number) => {
    setJobForm(prev => ({ ...prev, driver: { ...DRIVERS[i] } }));
  }, []);

  const step = STEPS[stepIndex];
  const isLast = stepIndex >= STEPS.length - 1;

  const advanceStep = React.useCallback(() => {
    if (stepIndex >= STEPS.length - 1) return;
    setStepIndex(i => i + 1);
  }, [stepIndex]);

  const doAction = React.useCallback((actionId: string) => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    switch (actionId) {
      case 'open_create':    setOfficeScreen('create_job');       advanceStep(); break;
      case 'submit_job':     setJobStatus('assigned'); setOfficeScreen('job_detail'); setDriverScreen('notification'); advanceStep(); break;
      case 'accept':         setJobStatus('accepted'); setDriverScreen('job_accepted'); advanceStep(); break;
      case 'start':          setJobStatus('on_route_collection'); setDriverScreen('on_route_collection'); setOfficeScreen('job_detail'); advanceStep(); break;
      case 'arrive_collection': setJobStatus('at_collection'); setDriverScreen('at_collection'); advanceStep(); break;
      case 'loaded':         setJobStatus('on_route_delivery'); setDriverScreen('on_route_delivery'); setOfficeScreen('job_detail'); advanceStep(); break;
      case 'arrive_delivery':   setJobStatus('at_delivery'); setDriverScreen('at_delivery'); advanceStep(); break;
      case 'capture_pod':    setJobStatus('delivered'); setPodCaptured(true); setDriverScreen('pod_done'); setOfficeScreen('job_detail_pod'); advanceStep(); break;
      case 'create_invoice': setJobStatus('invoiced'); setInvoiceCreated(true); setOfficeScreen('invoice'); setDriverScreen('complete'); advanceStep(); break;
      default: advanceStep();
    }
  }, [advanceStep]);

  React.useEffect(() => {
    if (step?.auto) {
      const t = setTimeout(() => advanceStep(), step.delay || 1000);
      return () => clearTimeout(t);
    }
  }, [stepIndex, step, advanceStep]);

  const restart = React.useCallback(() => {
    setStepIndex(0); setJobStatus('none'); setOfficeScreen('dashboard');
    setDriverScreen('lock'); setPodCaptured(false); setInvoiceCreated(false);
    setJobForm({ ...DEFAULT_JOB, collection: { ...DEFAULT_JOB.collection }, delivery: { ...DEFAULT_JOB.delivery }, driver: { ...DEFAULT_JOB.driver } });
  }, []);

  const value = React.useMemo(() => ({
    step, stepIndex, isLast, advanceStep, doAction, restart,
    jobStatus, officeScreen, driverScreen, podCaptured, invoiceCreated, animating,
    setOfficeScreen, setDriverScreen,
    job: jobForm, updateJobForm, selectDriver,
  }), [step, stepIndex, isLast, advanceStep, doAction, restart, jobStatus, officeScreen, driverScreen, podCaptured, invoiceCreated, animating, jobForm, updateJobForm, selectDriver]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = React.useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used within DemoProvider');
  return ctx;
}

export function Pill({ color, children }: { color: string; children: React.ReactNode }) {
  const m: Record<string, { bg: string; tx: string }> = {
    green:  { bg: H.green100, tx: H.green800 },
    blue:   { bg: H.blue100,  tx: H.blue800  },
    amber:  { bg: H.amberSoft, tx: H.amberText },
    gray:   { bg: '#F3F4F6', tx: '#374151'   },
    orange: { bg: '#FFEDD5', tx: '#9A3412'   },
  };
  const c = m[color] || m.gray;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, borderRadius: 999, padding: '4px 10px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', background: c.bg, color: c.tx, fontFamily: dm }}>
      {children}
    </span>
  );
}
