import { Link } from 'react-router-dom'
import { ServicesComponent } from './Styles'

export const Services = () => {
  return (
    <ServicesComponent>
      <Link to="/booking" className="services_box">
        <img
          className="services_box_illustration"
          src={`${process.env.PUBLIC_URL}/images/service_booking.jpg`}
          alt="Illustration de la section Booking DJ"
        />
        <div className="services_box_title">
          <h2>Booking DJ</h2>
          <p>Découvrir</p>
        </div>
      </Link>
      <Link to="/sound-design" className="services_box">
        <img
          className="services_box_illustration"
          src={`${process.env.PUBLIC_URL}/images/radio.jpg`}
          alt="Illustration de la section Sound Design"
        />
        <div className="services_box_title">
          <h2>Sound Design</h2>
          <p>Découvrir</p>
        </div>
      </Link>
    </ServicesComponent>
  )
}
