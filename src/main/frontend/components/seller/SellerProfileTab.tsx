import { CREATE_URL } from 'Frontend/utils/urls'
import { SellerProfileTabProps } from 'Frontend/inteface/seller/UiProps'
import { RootState } from 'Frontend/storage'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { BiTrash, BiUpload } from 'react-icons/bi'
import { useSelector } from 'react-redux'


const SellerProfileTab: React.FC<SellerProfileTabProps> = ({ tabs }) => {
    const userData:any|null = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
        <div className="tab-content pt-4" id="profileTabContent">
            <Tabs
                defaultActiveKey={tabs}
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="Overview" title="Overview">
                    <div className="tab-pane">
                        <h5 className="mb-3">About</h5>
                        <p className="lead mb-3">{userData?.about}</p>
                        <h5 className="mb-3">Profile</h5>
                        <div className="row g-0">
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">First Name</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.firstName}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">Last Name</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.lastName}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">Title</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.title}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">Country</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.city?.state?.country?.name}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">State</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.city?.state?.name}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">City</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.city?.name}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">Company</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.company}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">Phone</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.phoneNumber}</div>
                        </div>
                        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                            <div className="p-2">Email</div>
                        </div>
                        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                            <div className="p-2">{userData?.email}</div>
                        </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="Profile" title="Profile">
                    <div className="tab-pane">
                        <form action="#!" className="row gy-3 gy-xxl-4">
                        <div className="col-12">
                            <div className="row gy-2">
                            <div className="col-12">
                                <img src={userData && (userData?.profilePicture)?CREATE_URL(userData.profilePicture):"https://picsum.photos/200?random=1"} width={200}  className="img-fluid rounded-circle" alt="Luna John"/>
                            </div>
                            <div className="col-12">
                                <a href="#!" className="bg-primary text-light p-1 link-light rounded p-2">
                                    <BiUpload size={20}/>
                                </a>
                                <a href="#!" className="bg-danger text-light p-1 link-light rounded mx-2 p-2">
                                    <BiTrash size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" defaultValue={userData?.firstName}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" defaultValue={userData?.lastName}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputEducation" className="form-label">Title</label>
                            <input type="text" className="form-control" id="inputEducation" defaultValue={userData?.title}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputCompany" className="form-label">Company</label>
                            <input type="text" className="form-control" id="inputCompany" defaultValue={userData?.company}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="inputPhone" defaultValue={userData?.phoneNumber}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" defaultValue={userData?.email}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" defaultValue={userData?.address}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputCountry" className="form-label">Country</label>
                            <select className="form-select" id="inputCountry" defaultValue={"United States"} onChange={()=>{}}>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputYouTube" className="form-label">YouTube</label>
                            <input type="text" className="form-control" id="inputYouTube" defaultValue={userData?.youtube}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputX" className="form-label">X</label>
                            <input type="text" className="form-control" id="inputX" defaultValue={userData?.twitter}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputFacebook" className="form-label">Facebook</label>
                            <input type="text" className="form-control" id="inputFacebook" defaultValue={userData?.facebook}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="inputLinkedIn" className="form-label">LinkedIn</label>
                            <input type="text" className="form-control" id="inputLinkedIn" defaultValue={userData?.linkedin}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAbout" className="form-label">About</label>
                            <textarea className="form-control" id="inputAbout" defaultValue={userData?.about}></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </div>
                        </form>
                    </div>
                </Tab>
                <Tab eventKey="Emails" title="Emails">
                    <div className="tab-pane">
                        <form action="#!">
                        <fieldset className="row gy-3 gy-md-0">
                            <div className="col-12 col-md-9 col-xl-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="emailChange"/>
                                <label className="form-check-label" htmlFor="emailChange">
                                Email Changed
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="passwordChange"/>
                                <label className="form-check-label" htmlFor="passwordChange">
                                Password Changed
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="weeklyNewsletter"/>
                                <label className="form-check-label" htmlFor="weeklyNewsletter">
                                Weekly Newsletter
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="productPromotions"/>
                                <label className="form-check-label" htmlFor="productPromotions">
                                Product Promotions
                                </label>
                            </div>
                            </div>
                        </fieldset>
                        <div className="row">
                            <div className="col-12">
                            <button type="submit" className="btn btn-primary mt-4">Save Changes</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </Tab>
                <Tab eventKey="Password" title="Password">
                    <div className="tab-pane">
                        <form action="#!">
                        <div className="row gy-3 gy-xxl-4">
                            <div className="col-12">
                            <label htmlFor="currentPassword" className="form-label">Current Password</label>
                            <input type="password" className="form-control" id="currentPassword"/>
                            </div>
                            <div className="col-12">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newPassword"/>
                            </div>
                            <div className="col-12">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword"/>
                            </div>
                            <div className="col-12">
                            <button type="submit" className="btn btn-primary">Change Password</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </Tab>

            </Tabs>
        </div>
    </div>
  )
}

export default SellerProfileTab