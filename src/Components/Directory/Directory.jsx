import React from "react";
import "./Directory.scss";
import MenuItem from "../Menu-item/Menu-item";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          subtitle: "shop now",
          imgUrl: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: 2,
          title: "coats",
          subtitle: "shop now",
          imgUrl: "https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: 3,
          title: "shirts",
          subtitle: "shop now",
          imgUrl: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: 4,
          title: "men",
          subtitle: "shop now",
          imgUrl: "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          size: "large"
        },
        {
          id: 5,
          title: "women",
          subtitle: "shop now",
          imgUrl: "https://images.unsplash.com/photo-1522219406764-db207f1f7640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          size: "large"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, subtitle, imgUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            subtitle={subtitle}
            imgUrl={imgUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
