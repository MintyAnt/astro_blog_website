import React, { PropTypes as Types } from 'react';

export default class BlogPost extends React.Component {
    static propTypes = {
        title: Types.string,
        date: Types.string,
        tags: Types.array,
        markup: Types.element,
    };

    render() {
        const styles = {
        };

        return (
            <div>
                <div />
                <div>
                    {this.props.markup}
                </div>
            </div>
        );
    }
}
