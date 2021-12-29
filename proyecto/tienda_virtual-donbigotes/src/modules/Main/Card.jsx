import React from 'react'
import IconCart from '../svg/IconCart'
import ItemCount from './ItemCount'

function Card() {
    return (
        <div class="card">
            <div class="body">
                <div class="info">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="st0"
                            d="M16 12C15.6045 12 15.2178 11.8827 14.8889 11.6629C14.56 11.4432 14.3036 11.1308 14.1523 10.7654C14.0009 10.3999 13.9613 9.99778 14.0385 9.60982C14.1156 9.22186 14.3061 8.86549 14.5858 8.58579C14.8655 8.30608 15.2219 8.1156 15.6099 8.03843C15.9978 7.96126 16.3999 8.00087 16.7654 8.15224C17.1309 8.30362 17.4432 8.55996 17.663 8.88886C17.8827 9.21776 18 9.60444 18 10C18 10.5304 17.7893 11.0391 17.4142 11.4142C17.0392 11.7893 16.5305 12 16 12V12Z"
                            fill="black" />
                        <path class="st0"
                            d="M16 29C13.4289 29 10.9155 28.2376 8.77762 26.8091C6.63978 25.3807 4.97354 23.3503 3.9896 20.9749C3.00566 18.5995 2.74822 15.9856 3.24983 13.4638C3.75144 10.9421 4.98957 8.6257 6.80765 6.80762C8.62573 4.98953 10.9421 3.75141 13.4639 3.2498C15.9856 2.74819 18.5995 3.00563 20.9749 3.98957C23.3504 4.97351 25.3807 6.63975 26.8091 8.77759C28.2376 10.9154 29 13.4288 29 16C29 19.4478 27.6304 22.7544 25.1924 25.1924C22.7545 27.6304 19.4479 29 16 29V29ZM16 5.00001C13.8244 5.00001 11.6977 5.64514 9.88876 6.85384C8.07982 8.06254 6.66993 9.7805 5.83736 11.7905C5.0048 13.8005 4.78696 16.0122 5.2114 18.146C5.63584 20.2798 6.68348 22.2398 8.22186 23.7782C9.76024 25.3166 11.7203 26.3642 13.854 26.7886C15.9878 27.2131 18.1996 26.9952 20.2096 26.1627C22.2195 25.3301 23.9375 23.9202 25.1462 22.1113C26.3549 20.3023 27 18.1756 27 16C27 13.0826 25.8411 10.2847 23.7782 8.22183C21.7153 6.15893 18.9174 5.00001 16 5.00001Z"
                            fill="black" />
                        <path class="st0"
                            d="M16 24C15.4696 24 14.9609 23.7893 14.5858 23.4142C14.2107 23.0391 14 22.5304 14 22V16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14C16.5305 14 17.0392 14.2107 17.4142 14.5858C17.7893 14.9609 18 15.4696 18 16V22C18 22.5304 17.7893 23.0391 17.4142 23.4142C17.0392 23.7893 16.5305 24 16 24V24Z"
                            fill="black" />
                    </svg>
                </div>
                <div class="img"></div>
                <div class="descript1">
                    <div class="name">Bálsamo humectante y curativo</div>
                    <div class="rating">
                        <div class="star">
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_426:256)">
                                    <path
                                        d="M2.12374 9.99759C2.20486 9.50272 2.30487 8.89506 2.40488 8.2874C2.45378 7.99393 2.50045 7.70161 2.55157 7.40929C2.57443 7.30497 2.56921 7.19616 2.53649 7.09469C2.50377 6.99323 2.44479 6.90301 2.36599 6.83386C1.76073 6.23847 1.16362 5.6358 0.574655 5.02584C0.481861 4.93775 0.409893 4.82872 0.364324 4.7072C0.318755 4.58568 0.300809 4.45492 0.311876 4.32506C0.322943 4.1952 0.362726 4.06972 0.428144 3.95834C0.493561 3.84696 0.582856 3.75267 0.689114 3.68278C0.855061 3.59258 1.03765 3.54001 1.22474 3.52856C2.0115 3.40657 2.79938 3.28458 3.58836 3.1741C3.67088 3.16475 3.74934 3.13211 3.81518 3.07975C3.88102 3.0274 3.93172 2.95732 3.96174 2.87717C4.32512 2.10954 4.69961 1.34767 5.05855 0.575434C5.22301 0.230174 5.46637 0 5.85309 0C6.2398 0 6.46983 0.230174 6.63096 0.575434C6.98767 1.33846 7.35994 2.09343 7.71776 2.85646C7.75265 2.94525 7.81054 3.02233 7.88506 3.0792C7.95958 3.13606 8.04782 3.1705 8.14004 3.1787C8.97903 3.29379 9.81469 3.43304 10.6526 3.55964C10.8115 3.572 10.9628 3.63458 11.0863 3.73894C11.2097 3.84329 11.2992 3.98438 11.3427 4.14313C11.394 4.29951 11.3992 4.46816 11.3576 4.62761C11.316 4.78706 11.2296 4.93009 11.1093 5.0385C10.5226 5.6289 9.9436 6.22965 9.34686 6.80969C9.25923 6.88572 9.19387 6.98559 9.15813 7.09805C9.1224 7.2105 9.11771 7.33106 9.14461 7.44612C9.28463 8.25173 9.41686 9.07115 9.55244 9.88366C9.64578 10.4453 9.40464 10.8642 8.92458 10.9804C8.71127 11.0239 8.48998 10.9828 8.3045 10.8653C7.5933 10.4729 6.87877 10.0897 6.17313 9.69031C6.07633 9.62764 5.96447 9.59441 5.85031 9.59441C5.73615 9.59441 5.62429 9.62764 5.52749 9.69031C4.84741 10.077 4.15732 10.4441 3.47168 10.8193C3.27388 10.9263 3.07163 11.0276 2.83827 10.9977C2.39821 10.9333 2.11485 10.588 2.12374 9.99759Z"
                                        fill="#FFBF00" />
                                </g>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_426:256)">
                                    <path
                                        d="M2.12374 9.99759C2.20486 9.50272 2.30487 8.89506 2.40488 8.2874C2.45378 7.99393 2.50045 7.70161 2.55157 7.40929C2.57443 7.30497 2.56921 7.19616 2.53649 7.09469C2.50377 6.99323 2.44479 6.90301 2.36599 6.83386C1.76073 6.23847 1.16362 5.6358 0.574655 5.02584C0.481861 4.93775 0.409893 4.82872 0.364324 4.7072C0.318755 4.58568 0.300809 4.45492 0.311876 4.32506C0.322943 4.1952 0.362726 4.06972 0.428144 3.95834C0.493561 3.84696 0.582856 3.75267 0.689114 3.68278C0.855061 3.59258 1.03765 3.54001 1.22474 3.52856C2.0115 3.40657 2.79938 3.28458 3.58836 3.1741C3.67088 3.16475 3.74934 3.13211 3.81518 3.07975C3.88102 3.0274 3.93172 2.95732 3.96174 2.87717C4.32512 2.10954 4.69961 1.34767 5.05855 0.575434C5.22301 0.230174 5.46637 0 5.85309 0C6.2398 0 6.46983 0.230174 6.63096 0.575434C6.98767 1.33846 7.35994 2.09343 7.71776 2.85646C7.75265 2.94525 7.81054 3.02233 7.88506 3.0792C7.95958 3.13606 8.04782 3.1705 8.14004 3.1787C8.97903 3.29379 9.81469 3.43304 10.6526 3.55964C10.8115 3.572 10.9628 3.63458 11.0863 3.73894C11.2097 3.84329 11.2992 3.98438 11.3427 4.14313C11.394 4.29951 11.3992 4.46816 11.3576 4.62761C11.316 4.78706 11.2296 4.93009 11.1093 5.0385C10.5226 5.6289 9.9436 6.22965 9.34686 6.80969C9.25923 6.88572 9.19387 6.98559 9.15813 7.09805C9.1224 7.2105 9.11771 7.33106 9.14461 7.44612C9.28463 8.25173 9.41686 9.07115 9.55244 9.88366C9.64578 10.4453 9.40464 10.8642 8.92458 10.9804C8.71127 11.0239 8.48998 10.9828 8.3045 10.8653C7.5933 10.4729 6.87877 10.0897 6.17313 9.69031C6.07633 9.62764 5.96447 9.59441 5.85031 9.59441C5.73615 9.59441 5.62429 9.62764 5.52749 9.69031C4.84741 10.077 4.15732 10.4441 3.47168 10.8193C3.27388 10.9263 3.07163 11.0276 2.83827 10.9977C2.39821 10.9333 2.11485 10.588 2.12374 9.99759Z"
                                        fill="#FFBF00" />
                                </g>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_426:256)">
                                    <path
                                        d="M2.12374 9.99759C2.20486 9.50272 2.30487 8.89506 2.40488 8.2874C2.45378 7.99393 2.50045 7.70161 2.55157 7.40929C2.57443 7.30497 2.56921 7.19616 2.53649 7.09469C2.50377 6.99323 2.44479 6.90301 2.36599 6.83386C1.76073 6.23847 1.16362 5.6358 0.574655 5.02584C0.481861 4.93775 0.409893 4.82872 0.364324 4.7072C0.318755 4.58568 0.300809 4.45492 0.311876 4.32506C0.322943 4.1952 0.362726 4.06972 0.428144 3.95834C0.493561 3.84696 0.582856 3.75267 0.689114 3.68278C0.855061 3.59258 1.03765 3.54001 1.22474 3.52856C2.0115 3.40657 2.79938 3.28458 3.58836 3.1741C3.67088 3.16475 3.74934 3.13211 3.81518 3.07975C3.88102 3.0274 3.93172 2.95732 3.96174 2.87717C4.32512 2.10954 4.69961 1.34767 5.05855 0.575434C5.22301 0.230174 5.46637 0 5.85309 0C6.2398 0 6.46983 0.230174 6.63096 0.575434C6.98767 1.33846 7.35994 2.09343 7.71776 2.85646C7.75265 2.94525 7.81054 3.02233 7.88506 3.0792C7.95958 3.13606 8.04782 3.1705 8.14004 3.1787C8.97903 3.29379 9.81469 3.43304 10.6526 3.55964C10.8115 3.572 10.9628 3.63458 11.0863 3.73894C11.2097 3.84329 11.2992 3.98438 11.3427 4.14313C11.394 4.29951 11.3992 4.46816 11.3576 4.62761C11.316 4.78706 11.2296 4.93009 11.1093 5.0385C10.5226 5.6289 9.9436 6.22965 9.34686 6.80969C9.25923 6.88572 9.19387 6.98559 9.15813 7.09805C9.1224 7.2105 9.11771 7.33106 9.14461 7.44612C9.28463 8.25173 9.41686 9.07115 9.55244 9.88366C9.64578 10.4453 9.40464 10.8642 8.92458 10.9804C8.71127 11.0239 8.48998 10.9828 8.3045 10.8653C7.5933 10.4729 6.87877 10.0897 6.17313 9.69031C6.07633 9.62764 5.96447 9.59441 5.85031 9.59441C5.73615 9.59441 5.62429 9.62764 5.52749 9.69031C4.84741 10.077 4.15732 10.4441 3.47168 10.8193C3.27388 10.9263 3.07163 11.0276 2.83827 10.9977C2.39821 10.9333 2.11485 10.588 2.12374 9.99759Z"
                                        fill="#FFBF00" />
                                </g>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_426:256)">
                                    <path
                                        d="M2.12374 9.99759C2.20486 9.50272 2.30487 8.89506 2.40488 8.2874C2.45378 7.99393 2.50045 7.70161 2.55157 7.40929C2.57443 7.30497 2.56921 7.19616 2.53649 7.09469C2.50377 6.99323 2.44479 6.90301 2.36599 6.83386C1.76073 6.23847 1.16362 5.6358 0.574655 5.02584C0.481861 4.93775 0.409893 4.82872 0.364324 4.7072C0.318755 4.58568 0.300809 4.45492 0.311876 4.32506C0.322943 4.1952 0.362726 4.06972 0.428144 3.95834C0.493561 3.84696 0.582856 3.75267 0.689114 3.68278C0.855061 3.59258 1.03765 3.54001 1.22474 3.52856C2.0115 3.40657 2.79938 3.28458 3.58836 3.1741C3.67088 3.16475 3.74934 3.13211 3.81518 3.07975C3.88102 3.0274 3.93172 2.95732 3.96174 2.87717C4.32512 2.10954 4.69961 1.34767 5.05855 0.575434C5.22301 0.230174 5.46637 0 5.85309 0C6.2398 0 6.46983 0.230174 6.63096 0.575434C6.98767 1.33846 7.35994 2.09343 7.71776 2.85646C7.75265 2.94525 7.81054 3.02233 7.88506 3.0792C7.95958 3.13606 8.04782 3.1705 8.14004 3.1787C8.97903 3.29379 9.81469 3.43304 10.6526 3.55964C10.8115 3.572 10.9628 3.63458 11.0863 3.73894C11.2097 3.84329 11.2992 3.98438 11.3427 4.14313C11.394 4.29951 11.3992 4.46816 11.3576 4.62761C11.316 4.78706 11.2296 4.93009 11.1093 5.0385C10.5226 5.6289 9.9436 6.22965 9.34686 6.80969C9.25923 6.88572 9.19387 6.98559 9.15813 7.09805C9.1224 7.2105 9.11771 7.33106 9.14461 7.44612C9.28463 8.25173 9.41686 9.07115 9.55244 9.88366C9.64578 10.4453 9.40464 10.8642 8.92458 10.9804C8.71127 11.0239 8.48998 10.9828 8.3045 10.8653C7.5933 10.4729 6.87877 10.0897 6.17313 9.69031C6.07633 9.62764 5.96447 9.59441 5.85031 9.59441C5.73615 9.59441 5.62429 9.62764 5.52749 9.69031C4.84741 10.077 4.15732 10.4441 3.47168 10.8193C3.27388 10.9263 3.07163 11.0276 2.83827 10.9977C2.39821 10.9333 2.11485 10.588 2.12374 9.99759Z"
                                        fill="#FFBF00" />
                                </g>
                            </svg>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_426:256)">
                                    <path
                                        d="M2.12374 9.99759C2.20486 9.50272 2.30487 8.89506 2.40488 8.2874C2.45378 7.99393 2.50045 7.70161 2.55157 7.40929C2.57443 7.30497 2.56921 7.19616 2.53649 7.09469C2.50377 6.99323 2.44479 6.90301 2.36599 6.83386C1.76073 6.23847 1.16362 5.6358 0.574655 5.02584C0.481861 4.93775 0.409893 4.82872 0.364324 4.7072C0.318755 4.58568 0.300809 4.45492 0.311876 4.32506C0.322943 4.1952 0.362726 4.06972 0.428144 3.95834C0.493561 3.84696 0.582856 3.75267 0.689114 3.68278C0.855061 3.59258 1.03765 3.54001 1.22474 3.52856C2.0115 3.40657 2.79938 3.28458 3.58836 3.1741C3.67088 3.16475 3.74934 3.13211 3.81518 3.07975C3.88102 3.0274 3.93172 2.95732 3.96174 2.87717C4.32512 2.10954 4.69961 1.34767 5.05855 0.575434C5.22301 0.230174 5.46637 0 5.85309 0C6.2398 0 6.46983 0.230174 6.63096 0.575434C6.98767 1.33846 7.35994 2.09343 7.71776 2.85646C7.75265 2.94525 7.81054 3.02233 7.88506 3.0792C7.95958 3.13606 8.04782 3.1705 8.14004 3.1787C8.97903 3.29379 9.81469 3.43304 10.6526 3.55964C10.8115 3.572 10.9628 3.63458 11.0863 3.73894C11.2097 3.84329 11.2992 3.98438 11.3427 4.14313C11.394 4.29951 11.3992 4.46816 11.3576 4.62761C11.316 4.78706 11.2296 4.93009 11.1093 5.0385C10.5226 5.6289 9.9436 6.22965 9.34686 6.80969C9.25923 6.88572 9.19387 6.98559 9.15813 7.09805C9.1224 7.2105 9.11771 7.33106 9.14461 7.44612C9.28463 8.25173 9.41686 9.07115 9.55244 9.88366C9.64578 10.4453 9.40464 10.8642 8.92458 10.9804C8.71127 11.0239 8.48998 10.9828 8.3045 10.8653C7.5933 10.4729 6.87877 10.0897 6.17313 9.69031C6.07633 9.62764 5.96447 9.59441 5.85031 9.59441C5.73615 9.59441 5.62429 9.62764 5.52749 9.69031C4.84741 10.077 4.15732 10.4441 3.47168 10.8193C3.27388 10.9263 3.07163 11.0276 2.83827 10.9977C2.39821 10.9333 2.11485 10.588 2.12374 9.99759Z"
                                        fill="#FFBF00" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="content">
                        <h6>
                            40g
                        </h6>
                    </div>
                </div>
                <div class="descript2">
                    <div class="discount"></div>
                    <div class="price">$35.000</div>
                    <div class="price-g">(Gramo a $875)</div>
                </div>
            </div>
            <div class="container-buy">
                <ItemCount />
                <button class="buy">
                    <h6>Comprar</h6>
                </button>
            </div>
        </div>
    )
}

export default Card