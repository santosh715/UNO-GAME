import React from 'react'
import './assets/css/HostRoom.css'
import { Link } from 'react-router-dom'

const HostRoom = () => {
    return (
        <div>

            <div class="main-box">

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-6 one host  host-area box-1">





                            <div class="card">
                                <img class="img-1" src="./assets/img/user-img.jpg" alt="John" />
                                    <h5>Host</h5>

                                    <p><button>Start</button>
                                        <button>Exit</button>
                                    </p>
                            </div>





                        </div>
                        <div class="col join-code  box-2">
                            <div class="join-code-1">
                                <h2>Join Code: 000000</h2>
                                <p><button class="code-btn">Copy Code</button>
                                    <button class="code-btn">Invite</button>
                                </p>
                            </div>


                        </div>

                    </div>
                </div>

                <div class="container text-center">
                    <div class="row align-items-center">

                        {/* <!-- <div class="col join-players bg-info"> --> */}




                            <div class="container-fluid  box-3">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 one">
                                        <div class="card">
                                            <img class="img-1 " src="./assets/img/user-img.jpg" alt="John"/>
                                                <h5>Player 1</h5>

                                                <p><button>Make Host</button>
                                                    <button>Remove</button>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 one">
                                        <div class="card">
                                            <img class="img-1 " src="./assets/img/user-img.jpg" alt="John"/>
                                            <Link to="./assets/img/user-img.jpg"></Link>
                                                <h5>Player 2</h5>

                                                <p><button>Make Host</button>
                                                    <button>Remove</button>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 one">
                                        <div class="card">
                                            <img class="img-1" src="./images/user-img.jpg" alt="John"/>
                                                <h5>Player 3</h5>

                                                <p><button>Make Host</button>
                                                    <button>Remove</button>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 one">
                                        <div class="card">
                                            <img class="img-1" src="./images/user-img.jpg" alt="John" />
                                                <h5>Player 4</h5>

                                                <p><button>Make Host</button>
                                                    <button>Remove</button>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 one">
                                        <div class="card">
                                            <img class="img-1" src="./images/user-img.jpg" alt="John"/>
                                                <h5>Player 5</h5>

                                                <p><button>Make Host</button>
                                                    <button>Remove</button>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 one">
                                        <div class="card">
                                            <img class="img-1" src="./images/user-img.jpg" alt="John" />
                                                <h5>Player 6</h5>

                                                <p><button>Make Host</button>
                                                    <button>Remove</button>
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <!-- </div> --> */}


















                    </div>
                </div>
            </div>


        </div>
    )
}

export default HostRoom
