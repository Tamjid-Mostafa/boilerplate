import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import React, { useState } from 'react'

const Hero = ({ heroHeading, heroDesc, heroBtn, onClick }) => {
    const [loading, setLoading] = useState(false)
    const handleBtn = () => {
        onClick()
    }

    return (
        <div className="h-[80vh] flex flex-col items-center justify-center gap-10 text-center">
            <Text variant='heading'>{heroHeading}</Text>
            <Text variant='body'>
                {heroDesc}
            </Text>

            <Button onClick={handleBtn} variant={"primary"} className=""
                width={"10rem"}
                height={"5rem"}
                style={{
                    backgroundColor: "#F11A7B"
                }}
                loading={loading}
            >
                {heroBtn}
            </Button>
        </div>
    )
}

export default Hero