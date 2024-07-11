import React from 'react'
import './assets/css/HostRoom.css'

const RoomCode = () => {
    return (
        <div>

            <div class="col-md-4 join-code  box-2">
                <div class="join-code-1">
                    <div className="room-code">
                        <h2>Join Code: 000000</h2>
                    </div>
                    <div className="room-code-buttons">
                        <p><button className='room-code-btn'>Copy Code</button>

                            <button className='room-code-btn'>Invite</button>
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default RoomCode
