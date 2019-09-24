import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  background-color: ${props => props.theme.gray200};
`;

class Sidebar extends Component {
  render() {
    const {
      userHasOptions,
      currentCategory,
      handleCurrentCategoryChange
    } = this.props;

    return (
      <Wrapper className="xxxxx">
        <p>Ustawienia:</p>

        <div>
          <label htmlFor="userCanSelectCategory">
            Wybierz kategorię: {currentCategory}
          </label>
          <select
            value={currentCategory}
            id="userCanSelectCategory"
            onChange={e => handleCurrentCategoryChange(e.target.value)}
          >
            {userHasOptions.userCanSelectCategory.map(item => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </Wrapper>
    );
  }
}

export default Sidebar;
