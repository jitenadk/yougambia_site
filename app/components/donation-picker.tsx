'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Heart, LockKeyhole } from 'lucide-react';
import { donationOptions, external } from '../content';

export default function DonationPicker({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState('gofundme');
  const option = donationOptions.find(item => item.id === selected)!;
  return <div className={`donation-picker ${compact ? 'compact' : ''}`}>
    <div className="picker-heading"><span className="eyebrow">A SIMPLE WAY TO HELP</span><Heart size={21}/></div>
    <h2>Your kindness.<br/><em>Your way.</em></h2><p>Choose a donation platform to get started.</p>
    <fieldset><legend className="sr-only">Choose your donation platform</legend>{donationOptions.map(item => <label key={item.id} className={`payment-option ${selected === item.id ? 'selected' : ''}`}><input type="radio" name={compact ? 'quick-platform' : 'donation-platform'} value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)}/><span><strong>{item.name}</strong>{!compact && <small>{item.description}</small>}</span><span className="radio-mark">{selected === item.id && <Check size={13}/>}</span></label>)}</fieldset>
    <a className="button button-blue full-width" href={option.href} {...external}>Continue to {option.name} <ArrowUpRight size={18}/></a>
    <p className="picker-note"><LockKeyhole size={13}/><span>You choose the amount on {option.name}.<br/>Opens the official donation page in a new tab.</span></p>
  </div>;
}
