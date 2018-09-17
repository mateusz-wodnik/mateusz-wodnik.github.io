import React, {Component} from 'react';
import styles from './Home.sass';
import PrintText from '../../_utils/PrintText';
import LazyImg from '../../_utils/LazyImg';

class Home extends Component {
    state = {
        line1: false,
        line2: false
    }
    render() {
        return(
            <article id="home" className={styles.container}>
                <div className={styles.text}>
                    <h1>
                        <PrintText text="Cześć!" interval={150} randomize={150} callback={() => this.setState({line1: true})} />
                        <br />
                        {this.state.line1 && <PrintText text="Nazywam się Mateusz." interval={150} randomize={150} callback={() => this.setState({line2: true})} />}
                    </h1>
                    <h2>{this.state.line2 && <PrintText text="Jestem Web developerem" interval={150} randomize={150} />}</h2>
                </div>
                <LazyImg className={styles.img} src="/images/myImage-sm.png" alt="my photo"/>
            </article>
        );
    }
} 


export default Home;