import React, { useEffect } from 'react';
import './ParallaxComponent.css';
import Navbar from './Navbar';

const ParallaxComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;

            const leftCell = document.querySelector('.left-cell');

           if(leftCell){
            if(scrollPosition > 0){
                leftCell.classList.add('bg-img-scroll');
            }
            else{
                leftCell.classList.remove('bg-img-scroll');
            }
           }


            const parallaxElement = document.querySelector('.parallax-background');
            if (parallaxElement) {
                const zoomFactor = 1 + scrollPosition * 0.0001; // Adjust the zoom factor to your liking
                parallaxElement.style.transform = `scale(${zoomFactor})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="parallax-container">
            <Navbar />
            <div className="parallax-background">
                <p className='heading'>Building New Age</p>
                <p className="sub-heading">Healthcare With AI</p>
                <p className="sub-text">
                    Assisting medical professionals<br />
                    <span className="inline">in</span> achieving enhanced clinical<br />
                    <span className="inline2">outcomes</span> 
                </p>
                <button className="learn-more-btn">Learn More</button>
            </div>
            
            <div className="table-container">
            <table className="info-table">
                    <colgroup>
                        <col style={{ width: '40%', height:'80%' }} />
                        <col style={{ width: '60%', height:'80%' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className='bg-img'>
                            <p className='head'>Revolutionizing </p>
                            <p className='sub'>Healthcare</p>
                            <p className='para'>Our AI-based algorithms swiftly and <br/>   <span className="inline">accurately</span> analyze patient clinical <br/>   <span className="inline">data</span> assisting medical professionals<br/>   <span className="inline">in</span> diagnosing health issues more<br/> efficiently.</p>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='left-cell'>
                            {/* <p>This is a paragraph on the image.</p> */}
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ParallaxComponent;
