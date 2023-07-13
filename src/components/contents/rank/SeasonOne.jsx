'use client';

import * as Tablestyled from 'components/style/common/Table.style';
import * as Substyled from 'components/style/common/Area.style';
import { useTranslation } from 'react-i18next';
import React from 'react';

const SeasonOne = () => {

    const { t } = useTranslation();

    return ( 
        <Substyled.AccordionContent>
            <Tablestyled.Wrap display="grid" gridTemplateColumns="repeat(2, 1fr)" rg="30px" type="none">
                <div>
                    <Substyled.MediumTitle className="accTitle">{t(`gpItem.gpDepth1.group4.tHeader3`)}</Substyled.MediumTitle>

                    <Tablestyled.Table className="type02 type04 col2">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                <Tablestyled.CellHeader colSpan={2}>{t(`gpItem.gpDepth1.group18.title2`)}</Tablestyled.CellHeader>
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body revert>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">{t(`gpItem.gpDepth1.group20.top`)}</Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item14`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item15`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>

                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">{t(`gpItem.gpDepth1.group20.middle`)}</Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item16`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item17`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>

                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">{t(`gpItem.gpDepth1.group20.bottom`)}</Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item18`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </div>
                
                <div>
                    <Substyled.MediumTitle className="accTitle">{t(`gpItem.gpDepth1.group4.tHeader4`)}</Substyled.MediumTitle>
                    <Tablestyled.Table className="type02 type04 col2">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                <Tablestyled.CellHeader colSpan={2}>{t(`gpItem.gpDepth1.group18.title2`)}</Tablestyled.CellHeader>
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body revert>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">{t(`gpItem.gpDepth1.group20.top`)}</Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item19`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item20`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>

                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">{t(`gpItem.gpDepth1.group20.middle`)}</Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item21`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item22`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>

                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">{t(`gpItem.gpDepth1.group20.bottom`)}</Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item23`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </div>

                <div>
                    <Tablestyled.Table className="type02 type04 col2">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                <Tablestyled.CellHeader colSpan={2}>{t(`gpItem.gpDepth1.group18.title3`)}</Tablestyled.CellHeader>
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body revert>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.GrandMasterDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title5`)}</Tablestyled.GrandMasterDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item2`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item3`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item4`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item5`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item6`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.MasterDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title4`)}</Tablestyled.MasterDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item2`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item4`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item5`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item6`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.GoldDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title3`)}</Tablestyled.GoldDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item2`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item5`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item6`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.SliverDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title2`)}</Tablestyled.SliverDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item6`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item12`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.BronzeDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title1`)}</Tablestyled.BronzeDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    {t(`gpItem.gpDepth1.group19.item13`)}
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </div>

                <div>
                    <Tablestyled.Table className="type02 type04 col2">
                        <Tablestyled.Head>
                            <Tablestyled.Row>
                                <Tablestyled.CellHeader colSpan={2}>{t(`gpItem.gpDepth1.group18.title3`)}</Tablestyled.CellHeader>
                            </Tablestyled.Row>
                        </Tablestyled.Head>

                        <Tablestyled.Body revert>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.GrandMasterDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title5`)}</Tablestyled.GrandMasterDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item7`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item8`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item9`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item10`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item11`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item3`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.MasterDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title4`)}</Tablestyled.MasterDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item7`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item8`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item9`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item10`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item11`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.GoldDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title3`)}</Tablestyled.GoldDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item8`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item11`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item11`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.SliverDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title2`)}</Tablestyled.SliverDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    <p>{t(`gpItem.gpDepth1.group19.item8`)}</p>
                                    <p>{t(`gpItem.gpDepth1.group19.item12`)}</p>
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                            <Tablestyled.Row>
                                <Tablestyled.CellDescription as="td">
                                    <Tablestyled.BronzeDiv as="span" className="full">{t(`gpItem.gpDepth1.group3.title1`)}</Tablestyled.BronzeDiv>
                                </Tablestyled.CellDescription>
                                <Tablestyled.CellDescription as="td">
                                    {t(`gpItem.gpDepth1.group19.item13`)}
                                </Tablestyled.CellDescription>
                            </Tablestyled.Row>
                        </Tablestyled.Body>
                    </Tablestyled.Table>
                </div>
            </Tablestyled.Wrap>
        </Substyled.AccordionContent>
     );
}

export default SeasonOne;