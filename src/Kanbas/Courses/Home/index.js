import ModuleList from "../Modules";
import "./index.css"
import "../../../vendors/fontawesome/css/all.css"
import "../../../vendors/bootstrap/css/bootstrap.min.css"


function Home() {
    return (
        <>
            <div style={{ width: 1200 }} className="row">
                <div className='col-10'>
                    {/* <h2>Home</h2> */}
                    <ModuleList />
                </div>
                <div style={{ paddingLeft: 0, }} className="col-2">
                    <h2>Status</h2>
                    <button type="button" style={{ marginLeft: 0, marginBottom: 3, width: 210 }}
                        class="btn button-grey float-right">Import Existing Content</button>
                    <button type="button" class="btn button-grey float-right various-other-buttons">Import From
                        Commons</button>
                    <button type="button" class="btn button-grey float-right various-other-buttons">Choose Home Page</button>
                    <button type="button" class="btn button-grey float-right various-other-buttons">View Course Stream</button>
                    <button type="button" class="btn button-grey float-right various-other-buttons">New Announcement</button>
                    <button type="button" class="btn button-grey float-right various-other-buttons">New Analytics</button>
                    <button type="button" class="btn button-grey float-right various-other-buttons">View Course
                        Notifications</button>

                    <h6 style={{paddingTop:10}}>To Do</h6>
                    <hr />
                    <div class="row">
                        <span style={{marginLeft:20, color:"red"}}>Grade A1 - ENV + HTML</span>
                        <span style={{marginLeft:20, color:"grey", fontSize:12}}>100 Points | Sep 18 at 11:59pm</span>
                    </div>

                    <h6 style={{paddingTop:25}}>Coming Up</h6>
                    <hr />
                    <div class="row">
                        <span style={{marginLeft:20, color:"red"}}>Lecture</span>
                        <span style={{marginLeft:20, color:"grey", fontSize:12}}>CS4550.12631.202410</span>
                        <span style={{marginLeft:20, marginBottom:20, color:"grey", fontSize:12}}>Sep 11 at 11:45am</span>
                    </div>
                    <div class="row">
                        <span style={{marginLeft:20, color:"red"}}>CS5610 06 Lecture</span>
                        <span style={{marginLeft:20, color:"grey", fontSize:12}}>CS5610.12631.202410</span>
                        <span style={{marginLeft:20, marginBottom:20, color:"grey", fontSize:12}}>Sep 11 at 6pm</span>
                    </div>
                    <div class="row">
                        <span style={{marginLeft:20, color:"red"}}>CS5610 Web Development Lecture</span>
                        <span style={{marginLeft:20, color:"grey", fontSize:12}}>CS4550.12631.202410</span>
                        <span style={{marginLeft:20, marginBottom:20, color:"grey", fontSize:12}}>Sep 11 at 7pm</span>
                    </div>
                </div>



            </div>


        </>







    );
}
export default Home;