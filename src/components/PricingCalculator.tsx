import React, { useState, useEffect } from 'react';
import { Briefcase, Truck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Card from './Card';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const CalculatorSlider = ({ label, value, setValue, min, max }: { label: string, value: number, setValue: (v: number) => void, min: number, max: number }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-sm">
        <label className="font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded font-mono text-slate-800 dark:text-white">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full"
      />
    </div>
  );
};

const Visualizer = ({ office, drivers, customers }: { office: number, drivers: number, customers: number }) => {
  const Category = ({ count, label, Icon, color, description, feature }: { count: number, label: string, Icon: React.ElementType, color: string, description: string, feature?: string }) => {
    if (count === 0) return null;
    
    return (
      <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700/50 transition-all duration-300 animate-pop-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color.replace('text-', 'bg-')}/20`}>
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <div>
              <h3 className="text-slate-800 dark:text-white font-semibold">{label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
            </div>
          </div>
          <span className="font-mono text-2xl font-bold text-slate-700 dark:text-slate-300">{count}</span>
        </div>
        {feature && (
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/50">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${color.replace('text-', 'bg-')}/20 ${color}`}>
              {feature}
            </span>
          </div>
        )}
      </div>
    );
  };

  const totalUsers = office + drivers + customers;

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-0 bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your HOSS Ecosystem</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">A real-time view of your team structure.</p>
      </div>
      
      <div className="relative z-10 w-full flex-grow flex flex-col justify-center">
        {totalUsers > 0 ? (
          <div className="space-y-4">
            <Category 
              count={office} 
              label="Office Users" 
              Icon={Briefcase} 
              color="text-amber-500"
              description="Manage operations & dispatch."
              feature="Accesses Web Dashboard"
            />
            <Category 
              count={drivers} 
              label="Drivers" 
              Icon={Truck} 
              color="text-orange-500"
              description="Execute jobs & capture PODs."
              feature="Uses Mobile App"
            />
            <Category 
              count={customers} 
              label="Customers" 
              Icon={Users} 
              color="text-red-500"
              description="Track shipments & view history."
              feature="Accesses Customer Portal"
            />
          </div>
        ) : (
          <div className="text-center text-slate-500 my-auto">
              <p className="text-lg">Your Fleet Visualizer</p>
              <p className="text-sm">Adjust the sliders to see your team.</p>
          </div>
        )}
      </div>

      {totalUsers > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Total Team Size</span>
            <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">{totalUsers}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const PricingCalculator: React.FC = () => {
  const [officeUsers, setOfficeUsers] = useState(1);
  const [drivers, setDrivers] = useState(1);
  const [customers, setCustomers] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const costs = {
    office: 30,
    driver: 10,
    customer: 10,
    base: 50,
  };

  const officeCost = officeUsers * costs.office;
  const driverCost = drivers * costs.driver;
  const customerCost = customers * costs.customer;

  const animatedOfficeCost = useAnimatedCounter(officeCost);
  const animatedDriverCost = useAnimatedCounter(driverCost);
  const animatedCustomerCost = useAnimatedCounter(customerCost);
  const animatedTotalCost = useAnimatedCounter(totalCost);

  useEffect(() => {
    setTotalCost(officeCost + driverCost + customerCost + costs.base);
  }, [officeCost, driverCost, customerCost, costs.base]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <Card className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-900/50">
        <div className="space-y-6">
          <CalculatorSlider label="Office Users" value={officeUsers} setValue={setOfficeUsers} min={1} max={50} />
          <CalculatorSlider label="Drivers" value={drivers} setValue={setDrivers} min={1} max={50} />
          <CalculatorSlider label="Customers" value={customers} setValue={setCustomers} min={0} max={100} />
        </div>

        <div className="my-8 p-6 bg-slate-100 dark:bg-slate-900/70 rounded-xl text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">Your Estimated Monthly Total</p>
          <p className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            £{animatedTotalCost.toFixed(2)}
          </p>
        </div>

        <div className="space-y-2 text-sm border-t border-slate-200 dark:border-slate-700 pt-6">
          <div className="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Base Fee</span>
            <span className="font-mono">£{costs.base.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Office Users ({officeUsers} x £{costs.office})</span>
            <span className="font-mono">£{animatedOfficeCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Drivers ({drivers} x £{costs.driver})</span>
            <span className="font-mono">£{animatedDriverCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 dark:text-slate-300">
            <span>Customers ({customers} x £{costs.customer})</span>
            <span className="font-mono">£{animatedCustomerCost.toFixed(2)}</span>
          </div>
        </div>
        
        <p className="text-xs text-slate-500 mt-6">
          Please note: Prices shown are a rough guide. Bulk enquiries may qualify for discounted rates. Contact us for a custom quote.
        </p>

        <Link to="/demo" className="block mt-6">
          <Button size="lg" className="w-full" icon={ArrowRight} iconPosition="right">
            Book a Demo
          </Button>
        </Link>
      </Card>
      <Visualizer office={officeUsers} drivers={drivers} customers={customers} />
    </div>
  );
};

export default PricingCalculator;