import React from 'react';
import DownloadButton from '../../Components/DownloadButton';

const Resume = () => {
    return (
        <div className='h-[30vh] flex justify-center'>
            <DownloadButton buttonName={"Download My Resume"}></DownloadButton>
        </div>
    );
};

export default Resume;