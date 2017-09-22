import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return (
            <div className="row">
                <span>显示：</span>
                <div className="btn-group" role="group" aria-label="">
                    <button type="button" className={this.props.type=="SHOW_ALL"?"btn btn-success":"btn btn-default"} onClick={function(){this.props.onVisibilityChange("SHOW_ALL");}.bind(this)}>所有的</button>
                    <button type="button" className={this.props.type=="SHOW_ACTIVE"?"btn btn-success":"btn btn-default"} onClick={function(){this.props.onVisibilityChange("SHOW_ACTIVE");}.bind(this)}>活跃的</button>
                    <button type="button" className={this.props.type=="SHOW_COMPLETED"?"btn btn-success":"btn btn-default"} onClick={function(){this.props.onVisibilityChange("SHOW_COMPLETED");}.bind(this)}>已完成的</button>
                </div>
            </div>
        )
    }
}
Footer.propTypes={
    type:PropTypes.string.isRequired,
    onVisibilityChange:PropTypes.func.isRequired
}
export default Footer;