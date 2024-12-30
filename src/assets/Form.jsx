import { Component } from "react";

class Forms extends Component {
    render() {
        return (
            <>
                <form>
                    <ul>
                        <li>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" required />
                        </li>
                        <li>
                            <label htmlFor="DoB">DOB:</label>
                            <input type="date" id="DOB" required />
                        </li>
                        <li>
                            <label htmlFor="nickname">Nickname:</label>
                            <input type="text" id="nickname" required />
                        </li>
                        <li>
                             <label htmlFor="address">Address:</label>
                             <input type="text" id="address" required />
                        </li>
                        <li>
                             <label htmlFor="Phone Number">Phone Number:</label>
                             <input type="text" id="Phone Number" required />
                        </li>
                        <li className="gender-section">
                            <label>Gender:</label>
                            <div className="gender-options">
                                <label htmlFor="male">
                                    <input type="radio" id="male" name="gender" value="male" required />
                                    Male
                                </label>
                                <label htmlFor="female">
                                    <input type="radio" id="female" name="gender" value="female" />
                                    Female
                                </label>
                            </div>
                        </li>
                
            <li>
            <label>Favorite celebrities:</label>
            <div class="actor-options">
                <label for="actor1">
                    <input type="radio" id="actor1" name="Favorite celebrities" value="actor1" />Kim taehyung</label>
                <label for="actor2">
                    <input type="radio" id="actor2" name="Favorite celebrities" value="actor2" />Jung kook</label>
                <label for="actor3">
                    <input type="radio" id="actor3" name="Favorite celebrities" value="actor3" />Lee jong suk</label>
            </div>
        </li>
     </ul>
    </form>
            </>
        );
    }
}

export default Forms;
