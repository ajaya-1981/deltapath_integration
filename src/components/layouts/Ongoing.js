import React, { useState } from 'react';
import Avatar from './Avatar';
import './Incoming.scss';
import './Ongoing.scss';

const Ongoing = () => {
    const [pauseState,setPause] = useState('pause');

	const pauseCall = () => {
        setPause('pause');
	}
    const resumeCall = () => {
        setPause('resume');
	}
	const endCall = () => {

	}
	return (
		<div className='container container__incoming container__ongoing'>
			<Avatar />

			<div className='text'>
				<h2 className='text--username'>
					Visitor Name
				</h2>
				<h4 className='text--connecting'>188 8888 8888</h4>
				<h4 className='text--connecting'>{pauseState === 'pause' && 'Paused'}
                {pauseState === 'resume' && 'Timer will come'}
                </h4>
			</div>

			<div className="btn-section">

                {pauseState === 'resume' && (<div>
					<div className='button__resume btn btn-circle' onClick={pauseCall}>
						<i className='icon fa fa-phone'></i>
					</div>
					<span class="text">Resume</span>
				</div>)}
				
                {pauseState === 'pause' && (<div>
					<div className='button__pause btn btn-circle' onClick={resumeCall}>
						<i className='icon far fa-pause'></i>
					</div>
					<span class="text">Pause</span>
				</div>)}

                <div>
					<div className='button__decline btn btn-circle' onClick={endCall}>
						<i className='icon fa fa-phone'></i>
					</div>
					<span class="text">Decline</span>
				</div>
								
			</div>
			
		</div>
	);
};

export default Ongoing;
