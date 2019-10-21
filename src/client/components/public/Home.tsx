import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img width="100%" height="85%" src="https://images.newscientist.com/wp-content/uploads/2018/08/08114243/rexfeatures_9778243j.jpg"></img>
                <button type="submit" className="btn btn-danger btn-block" onClick={() => { this.props.history.push('/admin') }}>
                    View Admin Panel
                </button>
            </div>
        );
    }
}

interface HomeState { }
interface HomeProps extends RouteComponentProps { }

export default Home;