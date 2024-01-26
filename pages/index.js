import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Web Developer from University Malikussaleh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            M. Yuda Hasibuan
          </Heading>
          <p>1,5 year Web Development</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        Hello! 👋 I am Yuda Hasibuan, 3rd year Informatics Engineering student at the Malikussaleh University Institute of Aceh,
        . I like taking complex problems and turning them into simple and beautiful web pages, I also like the cyber side of websites because they look cool HAHAHA, the logic and coding structure and always try to write elegant and efficient code be it C++, Python, HTML , CSS or JavaScript.
          <br></br>
          you'll find me watching movies, hanging out with friends, and exploring the beauty of the 🏞 Aceh archipelago.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in Pematang Siantar, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          SMA NEGERI 1 BANDAR
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Started University Malikussaleh. in Informatics Engineering 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ 
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: "pink" }}>Music</text>,{' '}
          Movies
          , <text style={{ color: "pink" }}>Cabu</text>,{' '}Photography, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        <li><section>CS50X ,Harvard University</section></li>
        <li><section>Cyber Security Awareness & Information Security ,Government of India</section></li>
        <li><section>Computer Science With Python ,MIT </section></li>
        <li><section>Best Pratices Biomedical Research Data Management , Harvad Medical School</section></li>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Yudahasibuan23" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Yudahasibuan23
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Yuda A Hasibuan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/yuda.hasibuan23/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Yuda.Hasibuan23
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1x8IAfiVOHwdzvPje15DpEIXN3mjQApAf/view" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1x8IAfiVOHwdzvPje15DpEIXN3mjQApAf/view">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
