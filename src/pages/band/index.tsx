import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamsList } from '../../navigation'

type Props = NativeStackScreenProps<StackParamsList, 'Band'>

function BandScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text>Band Screen</Text>
      <View style={styles.post}>
        <View style={styles.postHalf}>
          <View style={styles.postBody}>
            <Text style={styles.h1}>We are the band</Text>
          </View>
        </View>

        <View style={styles.postHalf}>
          <View style={styles.postBody}>
            <Text style={styles.h5}>
              We are Tom Corbett, James FitzGerald, Will Hayes and Ian
              Iliopoulos, and we are ZIGO.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.post}>
        <Image
          src="/static/band/band-wood.jpg"
          alt="ZIGO"
          style={styles.fullImg}
        />
        <View style={styles.postBody}>
          <Text style={styles.p}>
            What started as a crazy idea in an attic space in September 2005
            quickly became something beard-strokingly serious for four young men
            with delusions of grandeur. From the sweaty depths of boys' bedrooms
            flowed a unique sound, a blend of their love for artists ranging
            from Radiohead to Robert Johnson and Focus to Foals, which they
            collectively filed under the name ZIGO.
            {/* <strong>ZIGO.</strong> */}
          </Text>
          <Text style={styles.p}>
            Their apocalyptically-tinged 2010 debut album{' '}
            {/* <strong>
              <a
                href="http://open.spotify.com/album/5hNd9WBdifh8SVYfYvQmBb"
                title="This Is How It Ends on Spotify"
                target="_blank">
                This Is How It Ends
              </a>
            </strong>{' '} */}
            found them staring disconsolately into the abyss of 20-something
            life (plus a few other existential niggles), but with each member
            the older, wiser, and groovier for his higher education odyssey,{' '}
            ZIGO have returned from their four corners of the globe (Reading,
            Southampton, Nottingham and Leicester respectively) to take back the
            throne.
          </Text>
          <Text style={styles.p}>
            ZIGO have already kicked off 2012 with the brutal one-two of single{' '}
            {/* <strong>
              <a
                href="http://wearezigo.bandcamp.com/album/someone-more-persuasive-than-you"
                title="Someone More Persuasive Than You on Bandcamp"
                target="_blank">
                Someone More Persuasive Than You
              </a>
            </strong>{' '} */}
            and five-track{' '}
            {/* <strong>
              <a
                href="http://wearezigo.bandcamp.com/album/the-foal"
                title="The Foal on Bandcamp"
                target="_blank">
                The Foal
              </a>
            </strong> */}
            , and the rest of the year does not look to be letting up the pace.
          </Text>
          <Text style={styles.p}>
            WE ARE ZIGO.
            {/* <strong>WE ARE ZIGO.</strong> */}
          </Text>
          <Text style={styles.p}>
            {/* <a
              href="http://en.wikipedia.org/wiki/Unman,_Wittering_and_Zigo"
              target="_blank">
              Who was Zigo?
            </a> */}
          </Text>
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.postBody}>
          <Image
            src="/static/band/tom.png"
            alt="Tom Corbett"
            style={styles.bandProf}
          />
          <Text style={styles.h3}>Tom Corbett shouts.</Text>
          <Text style={styles.p}>
            Tom was raised on a balanced diet of good old-fashioned rhythm n'
            blues and soul/disco, but decided soon after starting his university
            course that he would have to create a much more "alternative"
            persona for himself, so inhaled all kinds of math, hardcore and
            everything underground like as much tequila in the eyeball. To this
            end, he fulfils the oxymoronic cliché of 'confident frontman with
            underlying identity issues'.
          </Text>
          <Text style={styles.p}>
            As well as offering his guitar and keyboard “skills” to the band,
            {/* Tom enjoys long walks on the beach. Like <em>really </em>long. Like{' '}
            <em>bring a tent</em> long. <em>We gonna talk feelin's.</em> */}
          </Text>
          <Text style={styles.p}>
            {/* <a href="https://tcorbett.co.uk" target="_blank" title="T Corbett">
              Tom's website
            </a> */}
          </Text>
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.postBody}>
          <Image
            src="/static/band/james.png"
            alt="James FitzGerald"
            style={styles.bandProf}
          />
          <Text style={styles.h3}>James FitzGerald rumbles.</Text>
          <Text style={styles.p}>
            James is the talent. Composer of countless critically-acclaimed
            symphonies, as well as being the brains behind Lady Gaga, ZIGO
            allows him to rest on his musical laurels whilst smugly funking away
            in the corner of the stage. That knowing smile? It's because he's
            going home to his solid gold bath thanks to a little tune you may
            have heard called
            {/* <em>Umbrella</em>. */}
          </Text>
          <Text style={styles.p}>
            During his time at Reading University, he attempted to subtly
            educate the unwashed masses via his multi-award-winning radio
            program The Yearbook. He maintains a much quieter profile in his new
            position of almost-don at Oxford University, which we can only
            assume means he is building up to the mother of all pun-chlines.
          </Text>
          <Text style={styles.p}>
            {/* <a
              href="http://www.jfitzgerald.co.uk"
              target="_blank"
              title="J FitzGerald">
              James' website
            </a> */}
          </Text>
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.postBody}>
          <Image
            src="/static/band/will.png"
            alt="Will Hayes"
            style={styles.bandProf}
          />
          <Text style={styles.h3}>Will Hayes hits.</Text>
          <Text style={styles.p}>
            Will, thanks to a hilarious séance incident back in '93, actually
            channels the spirit of John Bonham, via the mind of Vic Reeves, out
            through his magic drummin' elbows. Still bitter about ZIGO's move
            from his own POP Studios to those of the mighty Blizzard Records,
            he's in the process of converting his History degree to various law
            certificates - with the sole aim of "pulling a Roger Waters" on the
            rest of the band.
          </Text>
          <Text style={styles.p}>
            He also likes yodelling in songs, and smashing wing mirrors off
            cars. Who knew?
          </Text>
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.postBody}>
          <Image
            src="/static/band/ian.png"
            alt="Ian Iliopoulos"
            style={styles.bandProf}
          />
          <Text style={styles.h3}>Ian Iliopoulos twangs.</Text>
          <Text style={styles.p}>
            Ian has not been seen since he boarded a London&ndash;bound train
            earlier this year, saying only that he was "doing law". We pray for
            his safe return.
          </Text>
        </View>
      </View>
      <Button onPress={() => navigation.popToTop()} title="Go Home" />
    </ScrollView>
  )
}

export default BandScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {},
  postHalf: {},
  postBody: {},
  bandProf: {},
  fullImg: {},
  h1: {},
  h3: {},
  h5: {},
  p: {},
})
