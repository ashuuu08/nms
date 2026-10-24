import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Navigate } from 'react-router-dom';

// This route is redirected to /services via vercel.json
// But we render a fallback redirect just in case
const Solutions = () => <Navigate to="/services" replace />;
export default Solutions;
