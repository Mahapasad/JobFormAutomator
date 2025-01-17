import Artboard from '@/Components/center/Artboard'
import LeftSidebar from '@/Components/left/LeftSidebar'
import RightSidebar from '@/Components/right/RightSidebar'
const BuilderArea = () => {
    return (
        <>
            <div className="flex flex-row">
                <LeftSidebar />
                <div className='w-5/12 h-fit'>
                    <Artboard/>
                </div>
                <RightSidebar/>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default BuilderArea