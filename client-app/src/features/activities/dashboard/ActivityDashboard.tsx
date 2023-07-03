import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useEffect } from 'react';

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
          const {loadActivities, activityRegistry} = activityStore;

          useEffect(() => {
            if(activityRegistry.size <= 1) loadActivities();
            }, [loadActivities])
          
            if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
      <Grid>
        <Grid.Column width="10">
         <ActivityList />
        </Grid.Column>
        <Grid.Column width='6'>
          <h2>Activity Filters</h2>
            {/* {selectedActivity &&  !editMode &&
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
           />} */}
        </Grid.Column>
      </Grid>
    );
})