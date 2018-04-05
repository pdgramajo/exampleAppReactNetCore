import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as AboutStore from '../store/About';


type AboutProps =
    AboutStore.AboutState
    & typeof AboutStore.actionCreators
    & RouteComponentProps<{}>;

class About extends React.Component<AboutProps, {}> {
    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{this.props.count}</strong></p>

            <button onClick={() => { this.props.toogle() }}>showTable</button>

            {this.props.showTable &&
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Column heading
                        </th>
                            <th>
                                Column heading
                        </th>
                            <th>
                                Column heading
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active">
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                        <tr>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                        <tr className="success">
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                        <tr>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                        <tr className="warning">
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                        <tr>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                        <tr className="danger">
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                            <td>
                                Column content
                        </td>
                        </tr>
                    </tbody>
                </table>
            }

        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.about, // Selects which state properties are merged into the component's props
    AboutStore.actionCreators                 // Selects which action creators are merged into the component's props
)(About) as typeof About;