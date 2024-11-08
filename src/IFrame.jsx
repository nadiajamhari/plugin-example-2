export const IFrame = ({
    name = "Nadia Jamhari",
    title = "Nadia Jamhari",
    src = "https://www.nadiajamhari.com/",
    height = "100%",
  }) => {
    const styles = `
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }
    .frame {
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border: none;
    }`;
  
    const elementStyles = { height: height };
  
    return (
      <>
        <style>{styles}</style>
        <iframe
          className="frame"
          style={elementStyles}
          name={name}
          title={title}
          src={src}
        ></iframe>
      </>
    );
  };