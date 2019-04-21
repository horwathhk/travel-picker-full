import { gql } from "apollo-boost";

const getCountryIndexesQuery = gql`
  query(
    $cost_of_living_index: Int
    $mean_download: Int
    $crime_index: Int
    $safety_index: Int
    $tourism_index: Int
  ) {
    getCountryIndexes(
      cost_of_living_index: $cost_of_living_index
      mean_download: $mean_download
      crime_index: $crime_index
      safety_index: $safety_index
      tourism_index: $tourism_index
    ) {
      country_id
      country_name
      mean_download
      cost_of_living_index
      crime_index
      safety_index
      tourism_index
    }
  }
`;

const getCountryRankQuery = gql`
  query($country_id: ID!) {
    getCountryRank(country_id: $country_id) {
      country_id
      country_name
      mean_download
      cost_of_living_index
      crime_index
      safety_index
      tourism_index
    }
  }
`;

export { getCountryIndexesQuery, getCountryRankQuery };
