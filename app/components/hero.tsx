'use client'

const Hero = ({ message }: { message: string }) => {

    const bgimg = "bg-[url(https://cdn.shopify.com/s/files/1/0326/7189/articles/General-Sherman-tree_2x_e8cf7056-6138-4082-8c4e-be29d0a218f3_2500x.jpg?v=1685623549)]"
    
    return (
        <div className="h-2/4 flex">
            <div className={`${bgimg} w-full aspect-[2.75/1] bg-center bg-cover bg-no-repeat`}>
                    <div className="relative flex bg-black/50 w-full h-full items-center">
                        <h3 className="text-center font-semibold text-5xl text-white w-full">{message}</h3>
                    </div>
            </div>
        </div>
    )
}

export default Hero