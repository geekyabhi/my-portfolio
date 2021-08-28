import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className="loader">
            <Loader type="Oval" color="#ffcc00" height={80} width={150} />
        </div>
    )
}

export default Loading