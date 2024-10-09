function Image({ url, width, height, classList }) {
    return (<>
        <div
            className={classList}
            style={{
                background: `${url} center no-repeat`,
                backgroundSize: 'contain',
                height: height,
                width: width,
                overflow: 'hidden'
            }}>

        </div>
    </>);
}

export default Image;