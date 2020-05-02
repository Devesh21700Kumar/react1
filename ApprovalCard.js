import React from 'react';


const ApprovalCard = (props) => { 
    console.log(props);
    return(
        <div className='ui card'>
            <div className='content'>Are YOU Sure?</div>
        
        <div className='extra content'>
            <div className='ui two buttons'>
                <div className='ui basic green button'>Approve</div>
                <div className='ui basic red button'>Reject</div>
            </div>
        </div>
        {props.children}
        </div>
    )

};



export default ApprovalCard;