import React, {Component} from 'react';

const withClassComponent = (WrappedComponent, className) => {
	const WithClassC = class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent ref={this.props.forwardedRef} {...this.props} />
				</div>
			);
		}
	}

	return React.forwardRef((props, ref) => {
		return <WithClassC {...props} forwardedRef={ref} />
	})
}

export default withClassComponent;