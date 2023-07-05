import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';


function App() {

  const location = useLocation();
   //const {activityStore} = useStore();

  //const[activities, setActivities] = useState<Activity[]>([]);
  // const[selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  // const [editmode, setEditMode] = useState(false);
 // const[submitting, setSubmitting] = useState(false);

  // useEffect(() => {
  // //  axios.get<Activity[]>('http://localhost:5000/api/Activities')
  // // agent.Activities.list()
  // //   .then(response => {
  // //     let activities : Activity[] = [];
  // //     response.forEach(activity => {
  // //       activity.date = activity.date.split('T')[0];
  // //       activities.push(activity);
  // //     })
  // //     console.log(response);
  // //     setActivities(activities);
  // //     setLoading(false);
  // //   })
  // activityStore.loadActivities();
  // }, [activityStore])

  // // function handleSelectedActivity(id: string){
  // //    setSelectedActivity(activities.find(x => x.id === id))
  // // }

  // // function handleCancelActivity(){
  // //   setSelectedActivity(undefined);
  // // }

  // // function handleFormOpen(id?: string){
  // //   id ? handleSelectedActivity(id) : handleCancelActivity();
  // //   setEditMode(true);
  // // }

  // // function handleFormClose() {
  // //   setEditMode(false);
  // // }

  // // function handleCreateOrEditActivity(activity: Activity){
  // //   setSubmitting(true);
  // //   if(activity.id){
  // //     agent.Activities.update(activity).then(() => {
  // //       setActivities([...activities.filter(x => x.id !== activity.id), activity])
  // //       setSelectedActivity(activity)
  // //       setEditMode(false);
  // //       setSubmitting(false);
  // //     })
  // //   } else {
  // //     activity.id = uuid();
  // //     agent.Activities.create(activity).then(() => {
  // //       setActivities([...activities, activity]);
  // //       setSelectedActivity(activity)
  // //       setEditMode(false);
  // //       setSubmitting(false);
  // //     })
  // //   }
  // //}
  //   // activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
  //   // : setActivities([...activities, {...activity, id: uuid()}]);
  //   // setEditMode(false);
  //   // setSelectedActivity(activity);
 

  // // function handleDeleteActivity(id: string){
  // //   setSubmitting(true);
  // //   agent.Activities.delete(id).then(() => {
  // //     setActivities([...activities.filter(x => x.id !== id)]);
  // //     setSubmitting(false);
  // //   })
    
  // // }

  // if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
    {location.pathname === '/' ? <HomePage/> : (
      <>
       <NavBar />
      <Container style={{marginTop: '7em'}}>
        <Outlet />
      </Container>
      </>
    )}
      
     </>
  );
}

export default observer(App);
