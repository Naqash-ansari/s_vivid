import BarberShop from './barber-shop/page'
import Resturants from './resturants/page'
import Stores from './store/page'
import NailsSign from './nails/page'

const page = () => {
    return (
        <>
            <Resturants />
            <NailsSign />
            <Stores />
            <BarberShop />
        </>
    )
}

export default page