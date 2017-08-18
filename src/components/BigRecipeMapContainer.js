import React from 'react'
import { ClusterSelection, GroupByControls } from "./clusterField"
import InteractiveClusters from "../containers/InteractiveClusters"
import InteractiveClusterSelection from "../containers/InteractiveClusterSelection"
import { Grid, Divider } from 'semantic-ui-react'
import {UnionGraph} from './charts/unionGraph'

export class BigRecipeMapContainer extends React.Component {
    
    render(){
       return( 
       <div className={"RecipeMap"}>
            <h2 type={"display3"}>RecipeMap</h2>
            <Grid celled>
                <Grid.Column>
                <InteractiveClusters clusters={this.props.clusters} height={400} width={500}/>
                <Divider fitted/>
                <GroupByControls/>
                <InteractiveClusterSelection/>
                </Grid.Column>
            </Grid>
        </div>
       );
    }
}

