/*
  data.js — your single source of truth
  ─────────────────────────────────────
  Edit this file to add/remove projects and portfolio photos.
  No other file needs to change for content updates.

  IMAGE PATHS
  ───────────
  All paths are relative to index.html.
  Suggested folder structure:

    images/
      cover-projects.jpg       ← home panel left
      cover-portfolio.jpg      ← home panel right
      about.jpg                ← about page portrait
      projects/
        specular/
          cover.jpg            ← project list thumbnail
          01.jpg
          02.jpg
          ...
        parallel/
          cover.jpg
          01.jpg
          ...
        geometry/
          cover.jpg
          01.jpg
          ...
      portfolio/
        01.jpg
        02.jpg
        ...

  RECOMMENDED IMAGE SPECS
  ───────────────────────
  - Format: JPG (quality 75–82 is enough; smaller files = faster load)
  - Cover images: 900 × 600 px
  - Series / portfolio thumbs: 900 × 675 px  (4:3 ratio matches the grid)
  - Lightbox: same file as thumb — the browser scales it up;
    or keep a separate /lightbox/ folder with higher-res versions
    and update the `lb` path below.
*/

const SITE = {

  /* ── PROJECTS ─────────────────────────────────────────
     Add as many series as you like.
     Each object:
       slug    — used to build the image folder path
       title   — displayed in the list and series header
       desc    — one-line description in the project list
       year    — displayed in the metadata footer
       photos  — array of objects:
                   src     path to the thumbnail (also used in lightbox)
                   lb      (optional) path to a larger version for lightbox
                   caption displayed below the lightbox image
  ──────────────────────────────────────────────────────── */
  series: [
    {
      cover: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382527/cover_xy6ggn.jpg',
      slug:  'harmaa',
      title: 'Harmaa',
      desc:  'These pictures were shot around Helsinki, Jämijärvi e Aurejärvi between the 6th and 10th of Novembre 2025. Those are among the grayest days of the year in Finland.',
      year:  'November 2025',
      photos: [
        // { src: 'pictures/harmaa/01.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/02.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/03.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/04.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/05.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/06.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/07.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/08.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/09.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/10.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/11.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/12.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/13.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/14.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/15.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/16.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/17.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/18.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/19.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/20.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/21.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/22.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/23.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/24.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/25.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/26.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/27.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/28.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/29.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/30.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/31.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/32.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/33.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/34.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/35.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/36.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/37.jpeg', caption: '', date: ''},
        // { src: 'pictures/harmaa/38.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/39.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/40.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/41.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/42.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/43.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/44.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/45.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/46.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/47.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/48.jpg', caption: '', date: ''},
        // { src: 'pictures/harmaa/49.jpg', caption: '', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382527/cover_xy6ggn.jpg', caption: '', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382452/01_bfgpsl.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382453/02_babdw7.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382455/03_duhvku.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382455/04_afwxkm.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382457/05_jxloeg.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382458/06_y1rbld.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382460/07_dwldaw.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382462/08_litzg1.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382463/09_rq3ske.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382465/10_hkr0tb.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382466/11_hqoaaw.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382468/12_umvmuy.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382469/13_sxeju9.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382471/14_dp3ntb.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382472/15_jv6bp5.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382474/16_wwnbuw.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382476/17_qa3hif.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382477/18_sizl0z.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382479/19_d39wfd.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382480/20_m1ebdv.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382482/21_k7klfp.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382483/22_fd60ov.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382485/23_pvoh9x.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382486/24_t6ajky.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382488/25_xrtrii.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382489/26_cs4ka0.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382491/27_q1irfc.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382493/28_njbk7n.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382494/29_wyltf6.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382496/30_tm1zve.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382498/31_dzyrst.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382499/32_yz8kpe.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382501/33_aacxqa.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382502/34_e4aruv.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382504/35_atqr1j.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382505/36_iy2bq6.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382507/37_wha6km.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382508/38_nb33xr.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382510/39_e5no4a.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382511/40_x3qsof.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382513/41_c5ed5v.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382514/42_raxhlw.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382516/43_sjnd87.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382518/44_prjwhe.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382519/45_ws4cy5.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382521/46_gbmdkq.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382522/47_jhst2w.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382524/48_qygwbd.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382525/49_wzojek.jpg', caption: '', date: ''},
      ],
    },
    {
      cover: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382127/cover_qmfqkv.jpg',
      slug:  'norman',
      title: 'Walk Sign is On',
      desc:  'This little project recounts the five weeks I spent in Norman (Oklahoma) between September 15 and October 20, 2025, during which desolation, boredom, and a scorching sun rarely left me alone.',
      year:  'September – October 2025',
      photos: [
        // { src: 'pictures/norman/01.jpg', caption: 'Legacy Trail', date: ''},
        // { src: 'pictures/norman/02.jpg', caption: 'Morland Avenue', date: ''},

        // { src: 'pictures/norman/03.jpg', caption: 'Brandt Park', date: ''},
        // { src: 'pictures/norman/04.jpg', caption: 'Boyd Street', date: ''},
        // { src: 'pictures/norman/05.jpg', caption: '506 Sunrise Street', date: ''},

        // { src: 'pictures/norman/06.jpg', caption: 'E Alameda Street', date: ''},
        // { src: 'pictures/norman/07.jpg', caption: 'E Tonhawa Street', date: ''},
        // { src: 'pictures/norman/08.jpg', caption: 'W Brooks Street', date: ''},
        // { src: 'pictures/norman/09.jpeg', caption: 'S University Boulevard', date: ''},
        // { src: 'pictures/norman/10.jpg', caption: 'E Alameda Street', date: ''},
        // { src: 'pictures/norman/11.jpg', caption: 'Buchnan Avenue', date: ''},
        // { src: 'pictures/norman/12.jpg', caption: 'Triad Village Drive', date: ''},

        // { src: 'pictures/norman/13.jpg', caption: 'Classen Boulevard', date: ''},
        // { src: 'pictures/norman/14.jpg', caption: 'S Ponca Avenue', date: ''},
        // { src: 'pictures/norman/15.jpg', caption: 'S Porter Avenue', date: ''},

        // { src: 'pictures/norman/16.jpg', caption: 'Acres Street', date: ''},
        // { src: 'pictures/norman/17.jpeg', caption: 'E Main Street', date: ''},
        // { src: 'pictures/norman/18.jpeg', caption: 'W Main Street / S Webster Avenue', date: ''},
        // { src: 'pictures/norman/19.jpeg', caption: 'For Kamylla, S Porter Avenue', date: ''},
        // { src: 'pictures/norman/20.jpg', caption: 'E Tonhawa Street', date: ''},

        // { src: 'pictures/norman/21.jpg', caption: 'Boyd Street / Shiloh Drive', date: ''},
        // { src: 'pictures/norman/22.jpg', caption: 'W Apache Street', date: ''},
        // { src: 'pictures/norman/23.jpg', caption: 'S Ponca Avenue', date: ''},

        // { src: 'pictures/norman/24.jpg', caption: 'Colonial Estates Park', date: ''},
        // { src: 'pictures/norman/25.jpg', caption: 'Kennedy Elementary School', date: ''},
        // { src: 'pictures/norman/26.jpg', caption: 'Colonial Common Parks', date: ''},

        // { src: 'pictures/norman/27.jpg', caption: 'Oklahoma Memorial Union', date: ''},
        // { src: 'pictures/norman/28.jpg', caption: 'Adams Hall', date: ''},
        // { src: 'pictures/norman/29.jpg', caption: 'Oklahoma Memorial Stadium', date: ''},
        // { src: 'pictures/norman/30.jpg', caption: 'Dodge Physics Complex', date: ''},
        // { src: 'pictures/norman/31.jpeg', caption: 'Gallogly Hall', date: ''},
        // { src: 'pictures/norman/32.jpeg', caption: 'Jones Family Welcome Center', date: ''},
        // { src: 'pictures/norman/33.jpg', caption: 'The OU Clock Tower', date: ''},
        // { src: 'pictures/norman/34.jpg', caption: 'Carson Engineering Center', date: ''},
        // { src: 'pictures/norman/35.jpg', caption: 'Fred Jones Jr. Museum of Art', date: ''},
        
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382127/cover_qmfqkv.jpg', caption: 'Legacy Trail', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382091/01_a3o460.jpg', caption: 'Legacy Trail', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382093/02_z5t26u.jpg', caption: 'Morland Avenue', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382093/03_unpbqy.jpg', caption: 'Brandt Park', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382094/04_etam2t.jpg', caption: 'Boyd Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382095/05_w3q6nz.jpg', caption: '506 Sunrise Street', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382096/06_ensanj.jpg', caption: 'E Alameda Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382097/07_rt8sle.jpg', caption: 'E Tonhawa Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382098/08_qz5esz.jpg', caption: 'W Brooks Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382099/09_zcco3g.jpg', caption: 'S University Boulevard', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382100/10_ovfm1n.jpg', caption: 'E Alameda Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382101/11_b8tvq9.jpg', caption: 'Buchnan Avenue', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382102/12_qe0tcq.jpg', caption: 'Triad Village Drive', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382103/13_e10qkr.jpg', caption: 'Classen Boulevard', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382104/14_vsebfw.jpg', caption: 'S Ponca Avenue', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382105/15_jocwxv.jpg', caption: 'S Porter Avenue', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382106/16_afkwaw.jpg', caption: 'Acres Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382107/17_lu6k0b.jpg', caption: 'E Main Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382108/18_qaoi1r.jpg', caption: 'W Main Street / S Webster Avenue', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382109/19_xxxxmf.jpg', caption: 'For Kamylla, S Porter Avenue', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382110/20_rzooxk.jpg', caption: 'E Tonhawa Street', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382111/21_cmpjzm.jpg', caption: 'Boyd Street / Shiloh Drive', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382113/22_epe1ql.jpg', caption: 'W Apache Street', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382114/23_rzcanc.jpg', caption: 'S Ponca Avenue', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382115/24_hnkta8.jpg', caption: 'Colonial Estates Park', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382116/25_zauenm.jpg', caption: 'Kennedy Elementary School', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382117/26_acmgmu.jpg', caption: 'Colonial Common Parks', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382118/27_uvnqo6.jpg', caption: 'Oklahoma Memorial Union', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382119/28_las9mb.jpg', caption: 'Adams Hall', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382120/29_h3m7ca.jpg', caption: 'Oklahoma Memorial Stadium', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382121/30_wbx3av.jpg', caption: 'Dodge Physics Complex', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382122/31_teoa4x.jpg', caption: 'Gallogly Hall', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382123/32_vvui0n.jpg', caption: 'Jones Family Welcome Center', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382124/33_xwpqzr.jpg', caption: 'The OU Clock Tower', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382125/34_orycd3.jpg', caption: 'Carson Engineering Center', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382126/35_tojavu.jpg', caption: 'Fred Jones Jr. Museum of Art', date: ''},
      ],
    },
    {
      cover: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373783/cover_rzzzmn.jpg',
      slug:  'sail',
      title: 'SAIL 2025',
      desc:  'A spin-off to the project in Amsterdam, with pictures taken at the 5th edition of SAIL in 2025',
      year:  'August 2025',
      photos: [
        // { src: 'pictures/sail/01.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/02.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/03.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/04.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/05.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/06.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/07.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/08.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/09.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/10.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/11.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/12.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/13.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/14.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/15.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/16.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/17.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/18.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/19.jpg', caption: '', date: ''},

        // { src: 'pictures/sail/20.jpg', caption: '', date: ''}, NO
        // { src: 'pictures/sail/21.jpg', caption: '', date: ''}, NO
        // { src: 'pictures/sail/22.jpg', caption: '', date: ''}, NO
        // { src: 'pictures/sail/23.jpg', caption: '', date: ''}, NO

        // { src: 'pictures/sail/24.jpg', caption: '', date: ''},

        // { src: 'pictures/sail/25.jpg', caption: '', date: ''}, NO

        // { src: 'pictures/sail/26.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/27.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/28.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/29.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/30.jpg', caption: '', date: ''},
        // { src: 'pictures/sail/31.jpg', caption: '', date: ''},

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373783/cover_rzzzmn.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373722/01_ujdm8x.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373723/02_f73lcg.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373725/03_n8mhmj.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373727/04_olwp4e.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373729/05_s7vrzw.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373731/06_e6abup.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373733/07_vbzjct.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373735/08_mbg3yl.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373737/09_az8pur.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373739/10_y46bju.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373741/11_ougqgc.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373743/12_k4gzor.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373745/13_y7ywqg.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373747/14_a52p20.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373749/15_ppktkf.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373751/16_jkr3lw.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373753/17_scfk2v.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373754/18_u3nl6r.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373756/19_fayyty.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373766/24_avytg9.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373771/26_p2yqax.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373773/27_xc848t.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373774/28_aqah2d.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373776/29_sijaib.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373778/30_pr3mal.jpg', caption: '', date: ''},
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775373780/31_w8uqwg.jpg', caption: '', date: ''},

      ],
    },
    { 
      cover: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382679/cover_rxt7ir.jpg',
      slug:  'amsterdam',
      title: 'Amsterdam',
      desc:  'This project is a corner of memories unconsciously gathered and crystallized in the photographs that compose it: an attempt to regain the time lost while wandering, gripped by boredom, through the streets of Amsterdam.',
      year:  'October 2023 – August 2025',
      photos: [
        // { src: 'pictures/amsterdam/01.jpg', caption: 'Plantage Muidergracht from Ben Polakbrug (brug 258)', date: '1 March 2023' },        
        // { src: 'pictures/amsterdam/02.jpg', caption: 'Nieuwe Achtergracht from Derkje Hazewinkel-Suringabrug (brug 2522)', date: '1 March 2023' },
        // { src: 'pictures/amsterdam/03.jpg', caption: 'Nieuwe Prinsengracht from Ben Polakbrug (brug 258)', date: '1 March 2023' },
        
        // { src: 'pictures/amsterdam/04.jpg', caption: 'Ons’ Lieve Heer op Solder', date: '20 March 2025' },
        // { src: 'pictures/amsterdam/05.jpg', caption: 'Ons’ Lieve Heer op Solder', date: '20 March 2025' },
        
        // { src: 'pictures/amsterdam/06.jpg', caption: 'Diemen Zuid (Metro)', date: '15 October 2023' },
        // { src: 'pictures/amsterdam/07.jpg', caption: 'Cuypersbibliotheek', date: '29 May 2023' },
        // { src: 'pictures/amsterdam/08.jpg', caption: 'Rijksmuseum', date: '29 May 2023' },

        // { src: 'pictures/amsterdam/09.jpg', caption: 'Pure Gold (Kamiel Rongen), Dijksgracht', date: '8 February 2025' },
        // { src: 'pictures/amsterdam/10.jpg', caption: 'Zebrabrug (brug 389)', date: '8 February 2025' },
        // { src: 'pictures/amsterdam/11.jpg', caption: 'Kattenburgerkade', date: '8 February 2025' },
        
        // { src: 'pictures/amsterdam/12.jpg', caption: 'Oudezijds Achterburgwal', date: '10 May 2025' },
        // { src: 'pictures/amsterdam/13.jpg', caption: 'Oudezijds Achterburgwal', date: '10 May 2025' },

        // { src: 'pictures/amsterdam/14.jpg', caption: 'Oudezijds Achterburgwal', date: '10 May 2025' },
        // { src: 'pictures/amsterdam/15.jpg', caption: 'Koningsstraat', date: '13 September 2024' },
        // { src: 'pictures/amsterdam/16.jpg', caption: 'Krom Boomssloot', date: '13 September 2024' },

        // { src: 'pictures/amsterdam/17.jpg', caption: 'Varkenssluis (brug 204)', date: '6 February 2025' },
        // { src: 'pictures/amsterdam/18.jpg', caption: 'Albert Cuypstraat', date: '22 August 2025' },

        // { src: 'pictures/amsterdam/19.jpg', caption: 'Plantage Muidergracht from Lau Mazirelbrug (brug 259)', date: '22 August 2025' },
        // { src: 'pictures/amsterdam/20.jpg', caption: 'Wittenburgergracht', date: '17 January 2025' },
        // { src: 'pictures/amsterdam/21.jpg', caption: 'Nieuwevaart from Dageraadsbrug (brug 353)', date: '17 January 2025' },

        // { src: 'pictures/amsterdam/22.jpg', caption: 'Oudezijds Voorburgwal', date: '18 April 2025' },
        // { src: 'pictures/amsterdam/23.jpg', caption: 'Oudezijds Achetburgwal', date: '18 April 2025' },

        // { src: 'pictures/amsterdam/24.jpg', caption: 'Oosterdokskade', date: '23 October 2024' },
        // { src: 'pictures/amsterdam/25.jpg', caption: 'Prins Hendrikkade', date: '23 October 2024' },
        // { src: 'pictures/amsterdam/26.jpg', caption: 'Oosterdok', date: '23 October 2024' },

        // { src: 'pictures/amsterdam/27.jpg', caption: 'Zandkasteel', date: '5 May 2024' },
        // { src: 'pictures/amsterdam/28.jpg', caption: 'Het Gele Blok', date: '7 December 2024' },
        // { src: 'pictures/amsterdam/29.jpg', caption: 'Bungehuis', date: '15 December 2024' },
        // { src: 'pictures/amsterdam/30.jpg', caption: 'UvA Library, Binnengasthuisstraat', date: '25 January 2025' },
        // { src: 'pictures/amsterdam/31.jpg', caption: 'The Whale', date: '24 February 2024' },

        // { src: 'pictures/amsterdam/32.jpg', caption: 'Pythonbrug (brug 1998)', date: '23 February 2025' },
        // { src: 'pictures/amsterdam/33.jpg', caption: 'Libau Eiland from Gevlebrug (brug 2430)', date: '7 December 2024' },
        // { src: 'pictures/amsterdam/34.jpg', caption: 'Haparandadam', date: '7 December 2024' },

        // { src: 'pictures/amsterdam/35.jpg', caption: 'Houtmankade', date: '26 October 2024' },
        // { src: 'pictures/amsterdam/36.jpg', caption: 'Oosterdokskade', date: '18 May 2025' },

        // { src: 'pictures/amsterdam/37.jpg', caption: 'Papaverweg', date: '26 March 2024' },
        // { src: 'pictures/amsterdam/38.jpg', caption: 'Pontsteiger', date: '12 October 2024' },
        // { src: 'pictures/amsterdam/39.jpg', caption: 'NDSM­Plein', date: '26 March 2024' },
        // { src: 'pictures/amsterdam/40.jpg', caption: 'IJdok', date: '13 April 2024' },
        // { src: 'pictures/amsterdam/41.jpg', caption: 'IJdok from A’DAM Lookout', date: '20 September 2024' },

        // { src: 'pictures/amsterdam/42.jpg', caption: 'Damrak', date: '3 December 2023' },
        // { src: 'pictures/amsterdam/43.jpg', caption: 'Westermarkt', date: '21 May 2025' },

        // { src: 'pictures/amsterdam/44.jpg', caption: 'Prins Heinkade', date: '12 August 2024' },
        // { src: 'pictures/amsterdam/45.jpg', caption: 'NDSM', date: '13 April 2024' },
        // { src: 'pictures/amsterdam/46.jpg', caption: 'Muiderpoort', date: '5 March 2023' },

        // { src: 'pictures/amsterdam/47.jpg', caption: 'Kiezersgracht', date: '22 March 2025' },
        // { src: 'pictures/amsterdam/48.jpg', caption: 'Kloveniersburgwal', date: '22 March 2025' },

        // { src: 'pictures/amsterdam/49.jpg', caption: 'Amstel from Blauwbrug (brug 236)', date: '18 May 2024' },
        // { src: 'pictures/amsterdam/50.jpg', caption: 'Zwanenburgwal from Ir. B. Bijvoetbrug (brug 229)', date: '14 September 2024' },
        // { src: 'pictures/amsterdam/51.jpg', caption: 'Zwanenburgwal from Ir. B. Bijvoetbrug (brug 229)', date: '19 January 2025' },

        // { src: 'pictures/amsterdam/52.jpg', caption: 'Sarphatistraat', date: '4 March 2023' },
        // { src: 'pictures/amsterdam/53.jpg', caption: 'Zeeburgerkade', date: '21 August 2025' },
        // { src: 'pictures/amsterdam/54.jpg', caption: 'Oudeschans', date: '18 January 2025' },

        // { src: 'pictures/amsterdam/55.jpg', caption: 'Rijksmuseum', date: '23 March 2024' },
        // { src: 'pictures/amsterdam/56.jpg', caption: 'Geldersekade', date: '16 October 2024' },

        // { src: 'pictures/amsterdam/57.jpg', caption: 'Stationsplein', date: '15 October 2023' },
        // { src: 'pictures/amsterdam/58.jpg', caption: 'Centraal Station', date: '12 August 2024' },
        // { src: 'pictures/amsterdam/59.jpg', caption: 'Oosterdokskade', date: '17 October 2024' },
        // { src: 'pictures/amsterdam/60.jpg', caption: 'Centraal Station', date: '12 August 2024' },
        // { src: 'pictures/amsterdam/61.jpg', caption: 'Centraal Station', date: '15 October 2023' },

        // { src: 'pictures/amsterdam/62.jpg', caption: 'Oude Kerk', date: '20 March 2025' },
        // { src: 'pictures/amsterdam/63.jpg', caption: 'Oude Kerk', date: '20 March 2025' },

        // { src: 'pictures/amsterdam/64.jpg', caption: 'The Light of Amsterdam, Amstel', date: '7 November 2024' },
        // { src: 'pictures/amsterdam/65.jpg', caption: 'Muziekgebow from Piet Heinkade', date: '22 November 2024' },
        // { src: 'pictures/amsterdam/66.jpg', caption: 'Burgemeester Röellstraat', date: '12 September 2022' },

        // { src: 'pictures/amsterdam/67.jpg', caption: 'Station Diemen Zuid', date: '12 November 2023' },
        // { src: 'pictures/amsterdam/68.jpg', caption: 'Our Domain from Roerdomppad, Diemen', date: '12 November 2023' },
        // { src: 'pictures/amsterdam/69.jpg', caption: 'Our Campus, Diemen', date: '30 November 2023' },

        // { src: 'pictures/amsterdam/70.jpg', caption: 'Vijzelstraat', date: '22 March 2025' },
        // { src: 'pictures/amsterdam/71.jpg', caption: 'Oude Tufmarkt', date: '22 March 2025' },

        // { src: 'pictures/amsterdam/72.jpg', caption: 'Our Domain from Diemen­Zuid (Metro)', date: '15 October 2023' },
        // { src: 'pictures/amsterdam/73.jpg', caption: 'Our Domain', date: '27 February 2024' },
        // { src: 'pictures/amsterdam/74.jpg', caption: 'Our Domain', date: '29 September 2023' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382679/cover_rxt7ir.jpg', caption: 'Amstelstation', date: '11 February 2024' },        

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382555/01_vqyj9p.jpg', caption: 'Plantage Muidergracht from Ben Polakbrug (brug 258)', date: '1 March 2023' },        
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382557/02_oiwiq6.jpg', caption: 'Nieuwe Achtergracht from Derkje Hazewinkel-Suringabrug (brug 2522)', date: '1 March 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382558/03_vbdvzr.jpg', caption: 'Nieuwe Prinsengracht from Ben Polakbrug (brug 258)', date: '1 March 2023' },
        
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382560/04_prxtkd.jpg', caption: 'Ons’ Lieve Heer op Solder', date: '20 March 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382562/05_dvn34i.jpg', caption: 'Ons’ Lieve Heer op Solder', date: '20 March 2025' },
        
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382563/06_xuxgik.jpg', caption: 'Diemen Zuid (Metro)', date: '15 October 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382566/07_dcabk2.jpg', caption: 'Cuypersbibliotheek', date: '29 May 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382567/08_bdyra6.jpg', caption: 'Rijksmuseum', date: '29 May 2023' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382568/09_jplcj7.jpg', caption: 'Pure Gold (Kamiel Rongen), Dijksgracht', date: '8 February 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382570/10_r5ewom.jpg', caption: 'Zebrabrug (brug 389)', date: '8 February 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382572/11_keyi0m.jpg', caption: 'Kattenburgerkade', date: '8 February 2025' },
        
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382573/12_qn642g.jpg', caption: 'Oudezijds Achterburgwal', date: '10 May 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382575/13_kv9rmr.jpg', caption: 'Oudezijds Achterburgwal', date: '10 May 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382577/14_sckts5.jpg', caption: 'Oudezijds Achterburgwal', date: '10 May 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382578/15_vimoit.jpg', caption: 'Koningsstraat', date: '13 September 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382580/16_xroeuu.jpg', caption: 'Krom Boomssloot', date: '13 September 2024' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382581/17_yywgsh.jpg', caption: 'Varkenssluis (brug 204)', date: '6 February 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382583/18_h0dycw.jpg', caption: 'Albert Cuypstraat', date: '22 August 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382585/19_d4ndnj.jpg', caption: 'Plantage Muidergracht from Lau Mazirelbrug (brug 259)', date: '22 August 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382587/20_h3ty5x.jpg', caption: 'Wittenburgergracht', date: '17 January 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382588/21_mt30hq.jpg', caption: 'Nieuwevaart from Dageraadsbrug (brug 353)', date: '17 January 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382590/22_mslktj.jpg', caption: 'Oudezijds Voorburgwal', date: '18 April 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382592/23_vjbwem.jpg', caption: 'Oudezijds Achetburgwal', date: '18 April 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382593/24_tczvra.jpg', caption: 'Oosterdokskade', date: '23 October 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382595/25_lstbh0.jpg', caption: 'Prins Hendrikkade', date: '23 October 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382597/26_tgrbww.jpg', caption: 'Oosterdok', date: '23 October 2024' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382598/27_pslegf.jpg', caption: 'Zandkasteel', date: '5 May 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382600/28_h1u8yx.jpg', caption: 'Het Gele Blok', date: '7 December 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382602/29_zcidla.jpg', caption: 'Bungehuis', date: '15 December 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382603/30_ymiyfw.jpg', caption: 'UvA Library, Binnengasthuisstraat', date: '25 January 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382605/31_twdmc5.jpg', caption: 'The Whale', date: '24 February 2024' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382607/32_nbqwej.jpg', caption: 'Pythonbrug (brug 1998)', date: '23 February 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382608/33_htvnzh.jpg', caption: 'Libau Eiland from Gevlebrug (brug 2430)', date: '7 December 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382610/34_jwyih2.jpg', caption: 'Haparandadam', date: '7 December 2024' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382612/35_xa7qnj.jpg', caption: 'Houtmankade', date: '26 October 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382613/36_zr84s1.jpg', caption: 'Oosterdokskade', date: '18 May 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382615/37_lsv6p1.jpg', caption: 'Papaverweg', date: '26 March 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382617/38_n9xt1a.jpg', caption: 'Pontsteiger', date: '12 October 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382618/39_gjvby1.jpg', caption: 'NDSM­Plein', date: '26 March 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382620/40_znhpka.jpg', caption: 'IJdok', date: '13 April 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382622/41_xdarme.jpg', caption: 'IJdok from A’DAM Lookout', date: '20 September 2024' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382624/42_azhcmd.jpg', caption: 'Damrak', date: '3 December 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382625/43_xk6r7c.jpg', caption: 'Westermarkt', date: '21 May 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382627/44_glizf4.jpg', caption: 'Prins Heinkade', date: '12 August 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382629/45_smzwge.jpg', caption: 'NDSM', date: '13 April 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382630/46_nspzll.jpg', caption: 'Muiderpoort', date: '5 March 2023' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382632/47_rdwx6n.jpg', caption: 'Kiezersgracht', date: '22 March 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382634/48_xvmuki.jpg', caption: 'Kloveniersburgwal', date: '22 March 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382635/49_kq1amb.jpg', caption: 'Amstel from Blauwbrug (brug 236)', date: '18 May 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382638/50_o6bptd.jpg', caption: 'Zwanenburgwal from Ir. B. Bijvoetbrug (brug 229)', date: '14 September 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382639/51_btm4uc.jpg', caption: 'Zwanenburgwal from Ir. B. Bijvoetbrug (brug 229)', date: '19 January 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382640/52_gwufbu.jpg', caption: 'Sarphatistraat', date: '4 March 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382642/53_xvkhgs.jpg', caption: 'Zeeburgerkade', date: '21 August 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382644/54_pwnihz.jpg', caption: 'Oudeschans', date: '18 January 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382645/55_ehslu2.jpg', caption: 'Rijksmuseum', date: '23 March 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382647/56_ka7hvs.jpg', caption: 'Geldersekade', date: '16 October 2024' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382649/57_jxcnxh.jpg', caption: 'Stationsplein', date: '15 October 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382650/58_ggvoiv.jpg', caption: 'Centraal Station', date: '12 August 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382652/59_neihde.jpg', caption: 'Oosterdokskade', date: '17 October 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382654/60_l9ulcl.jpg', caption: 'Centraal Station', date: '12 August 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382655/61_au0nrp.jpg', caption: 'Centraal Station', date: '15 October 2023' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382657/62_cpr9ei.jpg', caption: 'Oude Kerk', date: '20 March 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382659/63_gzvusw.jpg', caption: 'Oude Kerk', date: '20 March 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382660/64_j559da.jpg', caption: 'The Light of Amsterdam, Amstel', date: '7 November 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382662/65_etbu5s.jpg', caption: 'Muziekgebow from Piet Heinkade', date: '22 November 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382664/66_bfsysn.jpg', caption: 'Burgemeester Röellstraat', date: '12 September 2022' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382665/67_htvxji.jpg', caption: 'Station Diemen Zuid', date: '12 November 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382667/68_p0pcji.jpg', caption: 'Our Domain from Roerdomppad, Diemen', date: '12 November 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382669/69_j4qkot.jpg', caption: 'Our Campus, Diemen', date: '30 November 2023' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382670/70_ga2kpj.jpg', caption: 'Vijzelstraat', date: '22 March 2025' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382672/71_sp1mbb.jpg', caption: 'Oude Tufmarkt', date: '22 March 2025' },

        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382674/72_uzepmt.jpg', caption: 'Our Domain from Diemen­Zuid (Metro)', date: '15 October 2023' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382676/73_qd2ddp.jpg', caption: 'Our Domain', date: '27 February 2024' },
        { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382677/74_jbxivn.jpg', caption: 'Our Domain', date: '29 September 2023' },        

        // Add more lines here for more photos
      ],
    },
  ],

  /* ── PORTFOLIO ────────────────────────────────────────
     Standalone photographs not tied to a series.
     Same shape as photos above.
  ──────────────────────────────────────────────────────── */
  portfolio: [
    // { src: 'pictures/portfolio/cigno.jpg', caption: 'Swan, Amsterdam', date: 'May 2025'},
    // { src: 'pictures/portfolio/gabbiani.jpg', caption: 'Seaguls, Den Helder - Texel', date: 'July 2025' },
    // { src: 'pictures/portfolio/trieste.jpg', caption: 'Seaguls and yacth, Trieste', date: 'March 2024' },
    // { src: 'pictures/portfolio/saccargia.jpg', caption: 'Basilica di Saccargia, Codrongianos', date: 'August 2022' },
    // { src: 'pictures/portfolio/chiesetta.jpg', caption: 'Tiny chapel, Prato Piazza', date: 'July 2024'},
    // { src: 'pictures/portfolio/sorapis.jpg', caption: 'Punta Sorapis from Mosigo lake, San Vito di Cadore', date: 'August 2025'}, 
    // { src: 'pictures/portfolio/ulivo.jpg', caption: 'Olive tree, Paulilatino', date: 'August 2022'},
    // { src: 'pictures/portfolio/faro.jpg', caption: 'Lighthouse, Isola Piana', date: 'August 2025' },
    // { src: 'pictures/portfolio/ovovia.jpg', caption: 'Paradiso cable car, Passo del Tonale', date: 'January 2025' },
    // { src: 'pictures/portfolio/statua.jpg', caption: 'Statue and clothes, Venezia', date: 'December 2025' },
    // { src: 'pictures/portfolio/spiaggia.jpg', caption: 'Beach, Málaga', date: 'June 2024' },
    // { src: 'pictures/portfolio/bastione.jpg', caption: 'Bastione St. Remy, Cagliari', date: 'March 2026' },
    // { src: 'pictures/portfolio/sagoma.jpg', caption: 'Silhouette, Venezia', date: 'December 2025' },
    // { src: 'pictures/portfolio/sagoma_eli.jpg', caption: 'Silhouette, Hamburg', date: 'July 2022' },
    // { src: 'pictures/portfolio/graffiti.jpg', caption: 'Silhouette and graffiti, Amsterdam', date: 'April 2024' },
    // { src: 'pictures/portfolio/depijp_metro.jpg', caption: 'Moving people, Amsterdam', date: 'October 2025' },
    // { src: 'pictures/portfolio/bici.jpg', caption: 'Moving bike, Amsterdam', date: 'December 2025' },
    // { src: 'pictures/portfolio/sbahn.jpg', caption: 'Moving metro, Hamburg', date: 'April 2023' },
    // { src: 'pictures/portfolio/dockland.jpg', caption: 'Dockland-Bürogebäude, Hamburg', date: 'March 2023' },
    // { src: 'pictures/portfolio/palazzo.jpg', caption: 'Building in Java-eiland, Amsterdam', date: 'August 2025' },
    // { src: 'pictures/portfolio/alhambra.jpg', caption: 'Alhambra, Granada', date: 'June 2024' },
    // { src: 'pictures/portfolio/chilehaus.jpg', caption: 'Chilehaus, Hamburg', date: 'May 2023'},
    // { src: 'pictures/portfolio/galleria.jpg', caption: 'Galleria, Milano', date: 'April 2023' },
    // { src: 'pictures/portfolio/tempietto.jpg', caption: 'Tempietto, Roma', date: 'June 2023' },
    // { src: 'pictures/portfolio/brion.jpg', caption: 'Brion memorial, Altivole', date: 'July 2024' },
    // { src: 'pictures/portfolio/trampolino.jpeg', caption: 'Trampolino Italia, Cortina', date: 'July 2023' },
    // { src: 'pictures/portfolio/ponte.jpg', caption: 'Bridge frame, Amsterdam', date: 'May 2025' },
    // { src: 'pictures/portfolio/uva1.jpg', caption: 'Building, Amsterdam', date: 'November 2025' },
    // { src: 'pictures/portfolio/uva2.jpg', caption: 'Building, Amsterdam', date: 'August 2025' },
    // { src: 'pictures/portfolio/zandaam.jpg', caption: 'Building, Zandaam', date: 'November 2025' },

    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381938/cigno_xnzpwc.jpg', caption: 'Swan, Amsterdam', date: 'May 2025'},
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381952/gabbiani_knaemt.jpg', caption: 'Seaguls, Den Helder - Texel', date: 'July 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382003/trieste_ayxxan.jpg', caption: 'Seaguls and yacth from Molo Audace, Trieste', date: 'March 2024' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381972/saccargia_ngbfmr.jpg', caption: 'Basilica di Saccargia, Codrongianos', date: 'August 2022' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381931/chiesetta_licx56.jpg', caption: 'Tiny chapel, Prato Piazza', date: 'July 2024'},
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381986/sorapis_jwryrq.jpg', caption: 'Punta Sorapis from Mosigo lake, San Vito di Cadore', date: 'August 2025'}, 
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382007/ulivo_hvz6is.jpg', caption: 'Olive tree, Paulilatino', date: 'August 2022'},
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381948/faro_xdlfkt.jpg', caption: 'Lighthouse, Isola Piana', date: 'August 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381962/ovovia_uutxyj.jpg', caption: 'Paradiso cable car, Passo del Tonale', date: 'January 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381993/statua_cleycp.jpg', caption: 'Statue and clothes, Venezia', date: 'December 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381989/spiaggia_cm5kcr.jpg', caption: 'Beach, Málaga', date: 'June 2024' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381921/bastione_w1bnuw.jpg', caption: 'Bastione St. Remy, Cagliari', date: 'March 2026' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381979/sagoma_r3qzrm.jpg', caption: 'Silhouette, Venezia', date: 'December 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381976/sagoma_eli_o3k1nl.jpg', caption: 'Silhouette, Hamburg', date: 'July 2022' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381959/graffiti_bkvqye.jpg', caption: 'Silhouette and graffiti, Amsterdam', date: 'April 2024' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381941/depijp_metro_aoper1.jpg', caption: 'Moving people, Amsterdam', date: 'October 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381924/bici_g7dnzf.jpg', caption: 'Moving bike, Amsterdam', date: 'December 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381983/sbahn_mfzeqe.jpg', caption: 'Moving metro, Hamburg', date: 'April 2023' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381945/dockland_wf3wrb.jpg', caption: 'Dockland-Bürogebäude, Hamburg', date: 'March 2023' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381966/palazzo_gzdwle.jpg', caption: 'Building in Java-eiland, Amsterdam', date: 'August 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381919/alhambra_aungk5.jpg', caption: 'Alhambra, Granada', date: 'June 2024' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381935/chilehaus_wfzcof.jpg', caption: 'Chilehaus, Hamburg', date: 'May 2023'},
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381956/galleria_y3he6s.jpg', caption: 'Galleria, Milano', date: 'April 2023' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381996/tempietto_k0lflu.jpg', caption: 'Tempietto, Roma', date: 'June 2023' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381928/brion_yqddry.jpg', caption: 'Brion memorial, Altivole', date: 'July 2024' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382000/trampolino_udmjrv.jpg', caption: 'Trampolino Italia, Cortina', date: 'July 2023' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775381969/ponte_bqrind.jpg', caption: 'Bridge frame, Amsterdam', date: 'May 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382010/uva1_u0aywe.jpg', caption: 'Building, Amsterdam', date: 'November 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382013/uva2_sudssd.jpg', caption: 'Building, Amsterdam', date: 'August 2025' },
    { src: 'https://res.cloudinary.com/dcc2jtgtj/image/upload/v1775382017/zandaam_bvpcsy.jpg', caption: 'Building, Zandaam', date: 'November 2025' },
    // Add more lines here for more photos
  ],

};
