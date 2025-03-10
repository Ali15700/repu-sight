import { useNavigate } from 'react-router-dom';

function Logo({ className = '' }) {
  const navigate = useNavigate();

  return (
    <div
      className={`font-bold text-xl cursor-pointer ${className}`}
      onClick={() => navigate('/')}
    >
      Reputation Return
    </div>
  );
}

export default Logo;
