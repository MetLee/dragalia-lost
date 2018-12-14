import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import adventurer from '../../../redux/store/data/adventurer_data';
import weapon from '../../../redux/store/data/weapon_data';
import wyrmprint from '../../../redux/store/data/wyrmprint_data';
import dragon from '../../../redux/store/data/dragon_data';
import FilterForm from './FilterForm';
import ListItem from './ListItem';
import { capitalise } from '../../../redux/actions/actions';
const mapStateToProps = (state) => {
  const { focusSection, filters } = state;
  return {
    focusSection,
    filters,
  };
}

class SelectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterFields: {
        adventurer: ["weaponType", "rarity", "element"],
        weapon: ["weaponType", "rarity", "tier"],
        wyrmprint: ["rarity"],
        dragon: ["rarity", "element"],
      },
      selectData: {
        adventurer,
        weapon,
        wyrmprint,
        dragon,
      },
    }
  }

  // shouldComponentUpdate(nextProps) {

  // }
  render() {

    const { focusSection, filters } = this.props;
    const {
      filterFields: { [focusSection]: filterField },
      selectData: { [focusSection]: data },
    } = this.state;

    return (
      <Fragment>
        {focusSection &&
          <Fragment>
            <FilterForm
              filterField={filterField}
            />
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>{capitalise(focusSection)}</th>
                  <th>Name</th>
                  {filterField.map(field => <th key={uuidv4()}>{capitalise(field)}</th>)}
                </tr>
              </thead>

              <tbody>
                {data
                  .filter(item => {
                    for (let key of filterField) {
                      if (!item[key].includes(filters[key])) return false;
                    }
                    return true;
                  })
                  .sort((item1, item2) => this.sortFunction(item1, item2))
                  .map(item =>
                    <ListItem
                      key={uuidv4()}
                      section={focusSection}
                      item={item}
                      filterField={filterField}
                    />
                  )}
              </tbody>
            </table>
          </Fragment>
        }
      </Fragment>
    );
  }

  sortFunction(item1, item2) {
    if (item1.rarity > item2.rarity) return -1;
    if (item1.rarity < item2.rarity) return 1;

    if (item1.tier) {
      let tier1 = parseInt(item1.tier, 10), tier2 = parseInt(item2.tier, 10);
      if (tier1 > tier2) return -1;
      if (tier1 < tier2) return 1;
    }

    if (item1.element) {
      const element = ["Flame", "Water", "Wind", "Light", "Shadow"];
      const element1 = element.indexOf(item1.element),
        element2 = element.indexOf(item2.element);
      if (element1 > element2) return 1;
      if (element1 < element2) return -1;
    }

    if (item1.weaponType) {
      const weaponType = ["Sword", "Blade", "Dagger", "Axe", "Lance", "Bow", "Wand", "Staff"];
      const weaponType1 = weaponType.indexOf(item1.weaponType),
        weaponType2 = weaponType.indexOf(item2.weaponType);
      if (weaponType1 > weaponType2) return 1;
      if (weaponType1 < weaponType2) return -1;
    }
    return 0;
  }
}

SelectPanel.propTypes = {
  //redux
  focusSection: PropTypes.string,
  filters: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default connect(
  mapStateToProps,
)(SelectPanel);