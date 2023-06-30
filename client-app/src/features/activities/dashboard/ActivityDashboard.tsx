import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from './details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

//interface Props {
   // activities: Activity[];
    // selectedActivity : Activity | undefined;
    // selectActivity: (id:string) => void;
    // cancelSelectActivity: () => void;
    // editMode: boolean;
    // openForm: (id: string) => void;
    // closeForm: () => void;
    // createOrEdit: (activity: Activity) => void;
   //  deleteActivity: (id : string) => void;
    //submitting: boolean
//}

export default observer(function ActivityDashboard() {
    
          const {activityStore} = useStore();
          const{selectedActivity, editMode} = activityStore;

    return (
      <Grid>
        <Grid.Column width="10">
         <ActivityList />
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity &&  !editMode &&
           <ActivityDetails 
                // activity={selectedActivity} 
                // cancelSelectActivity={cancelSelectActivity}
                // openForm = {openForm}
           />}
           {editMode &&
           <ActivityForm 
          //  closeForm={closeForm} 
          //  activity={selectedActivity}
          //  createOrEdit={createOrEdit} 
           //submitting={submitting}  
           />}
        </Grid.Column>
      </Grid>
    );
})