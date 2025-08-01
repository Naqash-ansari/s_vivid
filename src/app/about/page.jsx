import AboutText from "./AboutText"
import BlogPage from "./BlogPage"
import CompanyLogoCarousel from '../CompanyLogoCarousel/page'
import AboutServices from "./AboutServices"
import TeamWork from "./teamwork/TeamWork"

// "use client"
const page = () => {
    return (
        <div className="">
            <AboutText />
            <CompanyLogoCarousel />
            <AboutServices />
            <TeamWork />
            <BlogPage />

        </div>
    )
}

export default page