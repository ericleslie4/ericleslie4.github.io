const Text = (props) => {
    const {children, inline} = props;
    if (inline) {
        return <span>{children}</span>;
    }
    return <div>{children}</div>;
};

export default Text;