import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../style.css';

export interface TabsProps {
  /** Content of Tabs */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
  defaultActiveKey?: string;
}

const Tabs = ({
  className = '',
  children,
  defaultActiveKey,
  ...rest
}: TabsProps) => (
  <div
    className={`wb-tabs wb-init wb-tabs-inited tabs-acc ${className}`}
    id="wb-auto-2"
  >
    <ul role="tablist" className="">
      <li role="presentation">
        <a id="" href="#details-panel1" aria-controls="">
          Example 1
        </a>
      </li>
      <li className="active" role="presentation">
        <a
          id="details-panel2-lnk"
          href="#details-panel2"
          role="tab"
          aria-controls="details-panel2"
        >
          Example 2
        </a>
      </li>
      <li role="presentation">
        <a
          id="details-panel3-lnk"
          href="#details-panel3"
          role="tab"
          aria-controls="details-panel3"
        >
          Example 3
        </a>
      </li>
    </ul>

    <div className="tabpanels">
      <details
        id="details-panel1"
        className="wb-auto-2-grp fade noheight out"
        role="tabpanel"
        open
        aria-hidden="true"
        aria-labelledby="details-panel1-lnk"
      >
        <summary
          className="wb-toggle tgl-tab wb-init wb-toggle-inited"
          data-toggle='{"parent": "#wb-auto-2", "group": ".wb-auto-2-grp"}'
          aria-hidden="true"
          id="wb-auto-3"
          role="tab"
          aria-posinset={1}
          aria-setsize={3}
        >
          Example 1
        </summary>
        <div
          className="tgl-panel"
          aria-labelledby="wb-auto-3"
          aria-hidden="false"
        >
          <p>
            From time immemorial the Norsemen{' '}
            <a href="#details-panel3">Example 3</a> were among the most daring
            and skilful mariners ever known. They built great wooden boats with
            tall, sweeping bows and sterns. These ships, though open and without
            decks, were yet stout and seaworthy. Their remains have been found,
            at times lying deeply buried under the sand and preserved almost
            intact. One such vessel, discovered on the shore of Denmark,
            measured 72 feet in length. Another Viking ship, which was dug up in
            Norway, and which is preserved in the museum at Christiania, was 78
            feet long and 17 feet wide. One of the old Norse sagas, or stories,
            tells how King Olaf Tryggvesson built a ship, the keel of which, as
            it lay on the grass, was 74 ells long; in modern measure, it would
            be a vessel of about 942 tons burden. Even if we make allowance for
            the exaggeration or ignorance of the writer of the saga, there is
            still a vast contrast between this vessel and the little ship
            Centurion in which Anson sailed round the world.
          </p>
        </div>
      </details>
      <details
        id="details-panel2"
        open
        className="wb-auto-2-grp fade in"
        role="tabpanel"
        aria-hidden="false"
        aria-labelledby="details-panel2-lnk"
      >
        <summary
          className="wb-toggle tgl-tab wb-init wb-toggle-inited"
          data-toggle='{"parent": "#wb-auto-2", "group": ".wb-auto-2-grp"}'
          aria-hidden="true"
          id="wb-auto-4"
          role="tab"
          aria-posinset={2}
          aria-setsize={3}
        >
          Example 2
        </summary>
        <div
          className="tgl-panel"
          aria-labelledby="wb-auto-4"
          aria-hidden="false"
        >
          <p>
            It is needless, however, to prove that the Norsemen could have
            reached America in their ships. The voyages from Iceland to
            Greenland which we know they made continually for four hundred years
            were just as arduous as a further voyage from Greenland to the coast
            of Canada.
          </p>
        </div>
      </details>
      <details
        id="details-panel3"
        className="wb-auto-2-grp fade noheight out"
        role="tabpanel"
        open
        aria-hidden="true"
        aria-labelledby="details-panel3-lnk"
      >
        <summary
          className="wb-toggle tgl-tab wb-init wb-toggle-inited"
          data-toggle='{"parent": "#wb-auto-2", "group": ".wb-auto-2-grp"}'
          aria-hidden="true"
          id="wb-auto-5"
          role="tab"
          aria-posinset={3}
          aria-setsize={3}
        >
          Example 3
        </summary>
        <div
          className="tgl-panel"
          aria-labelledby="wb-auto-5"
          aria-hidden="false"
        >
          <p>
            The story of the Norsemen runs thus. Towards the end of the ninth
            century, or nearly two hundred years before the Norman conquest,
            there was a great exodus or outswarming of the Norsemen from their
            original home in Norway. A certain King Harold had succeeded in
            making himself supreme in Norway, and great numbers of the lesser
            chiefs or jarls preferred to seek new homes across the seas rather
            than submit to his rule. So they embarked with their seafaring
            followers—Vikings, as we still call them—often, indeed, with their
            wives and families, in great open ships, and sailed away, some to
            the coast of England, others to France, and others even to the
            Mediterranean, where they took service under the Byzantine emperors.
            But still others, loving the cold rough seas of the north, struck
            westward across the North Sea and beyond the coasts of Scotland till
            they reached Iceland. This was in the year 874. Here they made a
            settlement that presently grew to a population of fifty thousand
            people, having flocks and herds, solid houses of stone, and a fine
            trade in fish and oil with the countries of Northern Europe. These
            settlers in Iceland attained to a high standard of civilization.
            They had many books, and were fond of tales and stories, as are all
            these northern peoples who spend long winter evenings round the
            fireside. Some of the sagas, or stories, which they told were true
            accounts of the voyages and adventures of their forefathers; others
            were fanciful stories, like our modern romances, created by the
            imagination; others, again, were a mixture of the two. Thus it is
            sometimes hard to distinguish fact and fancy in these early tales of
            the Norsemen. We have, however, means of testing the stories. Among
            the books written in Iceland there was one called the National
            Name-Book,&apos in which all the names of the people were written
            down, with an account of their forefathers and of any notable things
            which they had done.
          </p>
        </div>
      </details>
    </div>
  </div>
);

Tabs.displayName = 'Tabs';

export default Tabs;
