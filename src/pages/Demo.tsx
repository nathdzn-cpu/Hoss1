import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Users, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useToast } from '../contexts/ToastContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;

  fleetSize: string;
  challenges: string;
  preferredDate: string;
  preferredTime: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',

  fleetSize: '',
  challenges: '',
  preferredDate: '',
  preferredTime: '',
};

const Demo: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!EMAIL_REGEX.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.fleetSize) newErrors.fleetSize = 'Fleet size is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'demo', ...formData }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'An unexpected error occurred.');
      }

      setShowSuccessModal(true);
      setFormData(emptyForm);
    } catch (error) {
      console.error('Error sending demo request:', error);
      const errorMessage = error instanceof Error ? error.message : 'Please try again later.';
      showToast(`Failed to schedule demo: ${errorMessage}`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const demoFeatures = [
    { icon: Users, title: 'Live Walkthrough', description: 'A live demo focused on your specific setup and the parts of HOSS most relevant to you.' },
    { icon: Clock, title: 'Pick a Time That Works', description: 'Choose a time that suits you: morning, afternoon, or evening.' },
    { icon: MapPin, title: 'On-Site or Remote', description: 'Meet at your office or join us via video call, whichever is easier.' },
  ];

  const benefits = [
    'See HOSS working with real job scenarios',
    'Ask any questions about how it fits your operation',
    'Walk through onboarding and what getting set up looks like',
    'Discuss any integration requirements',
    'Get a clear picture of pricing for your team size',
    'No sales pressure, just a straight look at the product',
  ];

  const baseInput = 'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:text-gray-100 disabled:opacity-60 disabled:cursor-not-allowed';
  const inputCls = (err?: string) => `${baseInput} ${err ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`;

  return (
    <div className="pt-20 md:pt-16">
      <SEOHead
        title="Book a Free Demo | HOSS Haulage Management"
        description="See HOSS in action. Book a free demo and we will walk you through how HOSS works for your type of haulage operation. No commitment required."
        path="/demo"
      />
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-amber-600 dark:text-amber-500 mb-6">Schedule a Demo</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See HOSS with a live walkthrough built around your operation. We'll answer your questions and show you exactly how it works in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {demoFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Schedule Your Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name *</label>
                    <input id="demo-firstName" type="text" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} disabled={isSubmitting} aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? 'err-firstName' : undefined} className={inputCls(errors.firstName)} />
                    {errors.firstName && <p id="err-firstName" className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name *</label>
                    <input id="demo-lastName" type="text" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} disabled={isSubmitting} aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? 'err-lastName' : undefined} className={inputCls(errors.lastName)} />
                    {errors.lastName && <p id="err-lastName" className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                    <input id="demo-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} className={inputCls(errors.email)} />
                    {errors.email && <p id="err-email" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                    <input id="demo-phone" type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} disabled={isSubmitting} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'err-phone' : undefined} className={inputCls(errors.phone)} />
                    {errors.phone && <p id="err-phone" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name *</label>
                  <input id="demo-company" type="text" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} disabled={isSubmitting} aria-invalid={!!errors.company} aria-describedby={errors.company ? 'err-company' : undefined} className={inputCls(errors.company)} />
                  {errors.company && <p id="err-company" className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="demo-fleetSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fleet Size *</label>
                  <select id="demo-fleetSize" name="fleetSize" value={formData.fleetSize} onChange={handleChange} disabled={isSubmitting} aria-invalid={!!errors.fleetSize} aria-describedby={errors.fleetSize ? 'err-fleetSize' : undefined} className={inputCls(errors.fleetSize)}>
                    <option value="">Select Fleet Size</option>
                    <option value="1-5">1-5 vehicles</option>
                    <option value="6-20">6-20 vehicles</option>
                    <option value="21-50">21-50 vehicles</option>
                    <option value="50+">50+ vehicles</option>
                  </select>
                  {errors.fleetSize && <p id="err-fleetSize" className="mt-1 text-sm text-red-600">{errors.fleetSize}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-preferredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Date</label>
                    <input id="demo-preferredDate" type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} disabled={isSubmitting} className={inputCls()} />
                  </div>
                  <div>
                    <label htmlFor="demo-preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Time</label>
                    <select id="demo-preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} disabled={isSubmitting} className={inputCls()}>
                      <option value="">Select Time</option>
                      <option value="morning">Morning (9:00-12:00)</option>
                      <option value="afternoon">Afternoon (12:00-17:00)</option>
                      <option value="evening">Evening (17:00-20:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-challenges" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Challenges</label>
                  <textarea id="demo-challenges" name="challenges" value={formData.challenges} onChange={handleChange} disabled={isSubmitting} rows={3} placeholder="Tell us about your current logistics challenges..." className={inputCls()} />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} icon={Calendar} iconPosition="left">
                  {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8" gradient>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">What You'll Get</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                <h2 className="text-xl font-bold mb-4">Demo Guarantee</h2>
                <p className="text-amber-100 mb-4">
                  We're so confident in our platform that if you don't see immediate value in the first 15 minutes of your demo, we'll end the session early - no questions asked.
                </p>
                <p className="text-sm text-amber-200">Average demo satisfaction score: 9.8/10</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} title="Demo Scheduled Successfully!">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" aria-hidden="true" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your interest in HOSS! We've received your demo request and one of our specialists will contact you within 24 hours to confirm your preferred time and location.
          </p>
          <Button onClick={() => setShowSuccessModal(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Demo;
