import SpeakTutorPromo from './components/SpeakTutorPromo'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(to bottom, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      '--tw-gradient-from': '#f9fafb',
      '--tw-gradient-to': '#f3f4f6'
    }}>
      <SpeakTutorPromo />
    </div>
  );
}
