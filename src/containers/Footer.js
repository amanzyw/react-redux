import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return (
            <div>
                <span>显示：</span>
                <div>
                <span style={this.props.type=="SHOW_ALL"?{"textDecoration":"underline"}:null} onClick={function(){this.props.onVisibilityChange("SHOW_ALL");}.bind(this)}>所有的</span>
                </div>
                <div>
                <span style={this.props.type=="SHOW_ACTIVE"?{"textDecoration":"underline"}:null} onClick={function(){this.props.onVisibilityChange("SHOW_ACTIVE");}.bind(this)}>活跃的</span>
                </div>
                <div>
                <span style={this.props.type=="SHOW_COMPLETED"?{"textDecoration":"underline"}:null} onClick={function(){this.props.onVisibilityChange("SHOW_COMPLETED");}.bind(this)}>已完成的</span>
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