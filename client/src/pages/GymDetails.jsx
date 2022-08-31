import { useEffect } from 'react';

//~ Redux
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from '../Redux/action';

//~ importing Chakra
import {
  Box,
  Image,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Spinner,
} from '@chakra-ui/react';

//~ LINKS
import { links } from '../API/Links';

//~ importing Components
import { GymDetailsSearch } from '../Components/GymDetails/GymDetailsSearch';
import { GymDetailsSidebar } from '../Components/GymDetails/GymDetailsSidebar';

export const GymDetails = () => {
  //! Redux
  const dispatch = useDispatch();
  const gymState = useSelector(state => state.gymRed);

  //! API Links
  const { gymData, gymTerms } = links;

  //! Fetching data
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//   });
  useEffect(() => {
    dispatch(apiCall(gymData));
  }, []);

  return (
    <Box w="90%" m="5rem auto">
      <GymDetailsSearch />

      <Box display="grid" gridTemplateColumns="1fr 3fr" gap="5rem">
        <GymDetailsSidebar />

        {gymState.isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            m="auto"
          />
        ) : (
          <Box color="white" display="flex" flexDirection="column" gap="5rem">
            {gymState.data.map(elem => {
              return (
                <Box
                  key={elem.user_id}
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                  gap="5rem"
                  bg="#1d1d1d"
                  p="1rem"
                  cursor="pointer"
                  _hover={{
                    boxShadow:
                      'rgba(255, 255, 255, 0.251) 0px 54px 55px, rgba(255, 255, 255, 0.251) 0px -12px 30px,rgba(255, 255, 255, 0.251) 0px 4px 6px,rgba(255, 255, 255, 0.251) 0px 12px 13px,rgba(255, 255, 255, 0.251) 0px -3px 5px',
                  }}
                >
                  <Box>
                    <Image
                      src="https://i.ibb.co/SnSfqcn/free-gif.gif"
                      alt="free gif"
                      w="3rem"
                    />
                  </Box>

                  <Box display="flex" flexDirection="column" gap="5rem">
                    <Box>
                      <Text fontWeight="bold" fontSize="1.1rem">
                        {elem.gym_name}
                      </Text>
                      <Text>
                        {elem.rating == 0 ? (
                          <Image
                            src="https://i.ibb.co/mNgzv9B/stars-white.png"
                            alt="stars"
                            w="5rem"
                          />
                        ) : (
                          <Image
                            src="https://i.ibb.co/bKKHS80/stars-gold.png"
                            alt="stars"
                            w="5rem"
                          />
                        )}
                      </Text>
                      <Text>
                        {elem.address1}, {elem.address2}
                      </Text>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                      <Text fontWeight="bold" color="#e2b411">
                        ₹ 3600 for 3 Months
                      </Text>

                      <Button color="white" bg="#920909">
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};
